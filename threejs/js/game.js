class Game {
  constructor() {
    this.config = {
      background: 0x282828,
      ground: -1,
      cubeColor: 0xbebebe,
      cubeWidth: 4,
      cubeHeight: 2,
      cubeDeep: 4,
      jumperColor: 0x232323,
      jumperWidth: 1,
      jumperHeight: 2,
      jumperDeep: 1,
    };
    this.score = 0;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.size = { width: window.innerWidth, height: window.innerHeight };
    // left, right, top, bottom, near, far
    this.camera = new THREE.OrthographicCamera(window.innerWidth / -50, window.innerWidth / 50, window.innerHeight / 50, window.innerHeight / -50, 0, 5000);
    this.cameraProps = { current: new THREE.Vector3(0, 0, 0), next: new THREE.Vector3() };
    this.cubes = [];
    this.cubeStat = { nextDir: '' };
    this.falledStat = {
      // -1 落在当前块上
      location: -1,
      distance: 0,
    };
    this.fallingStat = {
      end: false,
      speed: 0.2,
    };
    this.jumperStat = {
      ready: false,
      xSpeed: 0,
      ySpeed: 0,
    };
  };
  init() {
    this._setCamera();
    this._setRenderer();
    this._addAxis();
    this._setLight();
    this._createCube();
    this._createCube();
    this._createJumper();
    this._updateCamera();
    this._handleWindowResize();
    window.addEventListener('resize', () => { this._handleWindowResize() });
    let canvas = document.querySelector('canvas');
    canvas.addEventListener('mouseup', () => {
      this._handleMouseUp();
    });
    canvas.addEventListener('mousedown', () => {
      this._handleMouseDown();
    });
  };

  _createJumper() {
    let geometry = new THREE.CubeGeometry(this.config.jumperWidth, this.config.jumperHeight, this.config.jumperDeep);
    let material = new THREE.MeshLambertMaterial({ color: this.config.jumperColor });
    this.jumper = new THREE.Mesh(geometry, material);
    geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 1, 0));
    // geometry.translate(0, 1, 0);
    this.jumper.position.y = 1;
    this.scene.add(this.jumper);
    // let jumper = new THREE.CubeGeometry(this.config.jumperWidth, this.config.jumperHeight, this.config.jumperDeep);
    // let material = new THREE.MeshLambertMaterial({ color: this.config.cubeColor });
    // this.jumper = new THREE.Mesh(jumper, material);
    // this.scene.add(this.jumper);
  }
  _updateCamera() {
    let lastIndex = this.cubes.length - 1;
    let pointA = {
      x: this.cubes[lastIndex - 1].position.x,
      z: this.cubes[lastIndex - 1].position.z,
    };
    let pointB = {
      x: this.cubes[lastIndex].position.x,
      z: this.cubes[lastIndex].position.z,
    };
    this.cameraProps.next = new THREE.Vector3((pointA.x + pointB.x) / 2, 0, (pointA.z + pointB.z) / 2);
  }
  _updateCameraProps() {
    if (this.cameraProps.current.x > this.cameraProps.next.x || this.cameraProps.current.z > this.cameraProps.next.z) {
      if (this.cubeStat.nextDir === 'left') {
        this.cameraProps.current.x -= 0.1;
      } else {
        this.cameraProps.current.z -= 0.1;
      }
      this.camera.lookAt(this.cameraProps.current);
      this._render();
      requestAnimationFrame(() => {
        this._updateCamera();
      });
    }
  };
  // 设置灯光
  _setLight() {
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1.1);
    directionalLight.position.set(3, 10, 5);
    // let ambLight = new THREE.AmbientLight(0x404040);
    this.scene.add(directionalLight);
  };

  _createCube() {
    let geometry = new THREE.CubeGeometry(this.config.cubeWidth, this.config.cubeHeight, this.config.cubeDeep);
    let material = new THREE.MeshLambertMaterial({ color: this.config.cubeColor });
    let cube = new THREE.Mesh(geometry, material);
    if (this.cubes.length) {
      // 随机一个方向
      this.cubeStat.nextDir = Math.random() > 0.5 ? 'left' : 'right';
      if (this.cubeStat.nextDir === 'left') {
        cube.position.x = this.cubes[this.cubes.length - 1].position.x - Math.random() * 4 - 6;
      } else {
        cube.position.z = this.cubes[this.cubes.length - 1].position.z - Math.random() * 4 - 6;
      }
    }
    this.cubes.push(cube);
    if (this.cubes.length > 6) {
      this.scene.remove(this.cubes.shift());
    }
    this.scene.add(cube);
    if (this.cubes.length > 1) {
      this._updateCameraProps();
    }
  };

  _handleMouseDown() {
    if (!this.jumperStat.ready && this.jumper.scale.y > 0.02) {
      this.jumper.scale.y -= 0.01;
      this.jumperStat.xSpeed += 0.004;
      this.jumperStat.ySpeed += 0.008;
      this._render();
      requestAnimationFrame(() => {
        this._handleMouseDown();
      });
    }
  }
  _handleMouseUp() {
    this.jumperStat.ready = true;
    if (this.jumper.position.y >= 1) {
      if (this.jumper.scale.y < 1) {
        this.jumper.scale.y += 0.1;
      }
      if (this.cubeStat.nextDir === 'left') {
        this.jumper.position.x -= this.jumperStat.xSpeed;
      } else {
        this.jumper.position.z -= this.jumperStat.xSpeed;
      }
      this.jumperStat.ySpeed -= 0.01;
      this.jumper.position.y += this.jumperStat.ySpeed;
      this._render();
      requestAnimationFrame(() => {
        this._handleMouseUp();
      });
    } else {
      this.jumperStat.ready = false;
      this.jumper.scale.y = 1;
      this.jumper.position.y = 1;
      this.jumper.xSpeed = 0;
      this.jumper.ySpeed = 0;
      this._checkInCube();
      if (this.falledStat.location === 1) {
        debugger;
        // 成功落到下一个盒子上
        this.score++;
      } else {
        debugger;
        // 没有成功        
        this._falling();
      }
    }
  }

  _checkInCube() {
    // -1: 当前盒子上
    // -10: 从盒子上掉落
    // 10: 从下一个盒子上掉落
    // 1: 下一个盒子上
    // 0: 没有落在盒子上
    let distanceCur, distanceNext;
    let should = (this.config.cubeWidth + this.jumper.width) / 2
    if (this.cubeStat.nextDir === 'left') {
      distanceCur = Math.abs(this.cubes[this.cubes.length - 2].position.x - this.jumper.position.x);
      distanceNext = Math.abs(this.cubes[this.cubes.length - 1].position.x - this.jumper.position.x);
      console.log('this.cubeStat.nextDir === "left"');
    } else {
      distanceCur = Math.abs(this.cubes[this.cubes.length - 2].position.z - this.jumper.position.z);
      distanceNext = Math.abs(this.cubes[this.cubes.length - 1].position.z - this.jumper.position.z);
      console.log('this.cubeStat.nextDir === "right"');
    }
    if (distanceCur < should) {
      // 落在当前块上
      this.falledStat.location = distanceCur < (this.config.cubeWidth) / 2 ? -1 : -10;
    } else if (distanceNext < should) {
      // 落在下一块上
      this.falledStat.location = distanceNext < (this.config.cubeWidth) / 2 ? 1 : 10;
    } else {
      // 没有落在方块上
      this.falledStat.location = 0;
    }
  }

  _falling() {
    // -10  
    debugger;
    if (this.falledStat.location === 10) {
      if (this.cubeStat.nextDir === 'left') {
        if (this.jumper.position.x > this.cubes[this.cubes.length - 1].position.x) {
          this._fallingDir('leftBottom');
        } else {
          this._fallingDir('leftTop');
        }
      } else {
        if (this.jumper.position.x > this.cubes[this.cubes.length - 1].position.x) {
          this._fallingDir('rightBottom');
        } else {
          this._fallingDir('rightTop');
        }
      }
    } else if (this.falledStat.location === -10) {
      if (this.cubeStat.nextDir === 'left') {
        this._fallingDir('leftTop');
      } else {
        this._fallingDir('rightTop');
      }
    } else if (this.falledStat.location === 0) {
      this._fallingDir('none');
    }
  }

  _fallingDir(dir) {
    let offset = this.falledStat.distance - this.config.cubeWidth / 2;
    let isRotate = true;
    let axis = dir.includes('left') ? 'z' : 'x';
    let rotate = this.jumper.rotation[axis];
    let fallingTo = this.config.ground + this.config.jumperWidth / 2;
    if (dir === 'leftTop') {
      rotate += 0.01;
      isRotate = this.jumper.rotation[axis] < Math.PI / 2;
    } else if (dir === 'leftBottom') {
      rotate -= 0.01;
      isRotate = this.jumper.rotation[axis] > -Math.PI / 2;
    } else if (dir === 'rightTop') {
      rotate -= 0.01;
      isRotate = this.jumper.rotation[axis] > -Math.PI / 2;
    } else if (dir === 'rightBottom') {
      rotate += 0.01;
      isRotate = this.jumper.rotation[axis] < Math.PI / 2;
    } else if (dir === 'none') {
      fallingTo = this.config.ground;
      isRotate = false;
    }
    if (!this.fallingStat.end) {
      if (isRotate) {
        this.jumper.rotation[axis] = rotate;
      } else if (this.jumper.position.y > fallingTo) {
        this.jumper.position.y -= this.fallingStat.speed;
      } else {
        this.fallingStat.end = true;
      }
      this._render();
      requestAnimationFrame(() => {
        this._falling();
      });
    }
  }

  _addAxis() {
    let axis = new THREE.AxisHelper(20);
    this.scene.add(axis);
  };
  _handleWindowResize() {
    this._setSize();
    this.camera.left = this.size.width / -50;
    this.camera.right = this.size.width / 50;
    this.camera.top = this.size.height / 50;
    this.camera.bottom = this.size.height / -50;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.size.width, this.size.height);
    this._render();
  };
  // 设置相机位置
  _setCamera() {
    // 设置相机的坐标
    this.camera.position.set(100, 100, 100);
    // 设置相机镜头对准的方向
    this.camera.lookAt(this.cameraProps.current);
  };
  // 设置render
  _setRenderer() {
    this.renderer.setSize(this.size.width, this.size.height);
    this.renderer.setClearColor(this.config.background);
    document.body.appendChild(this.renderer.domElement);
  };
  // 渲染, 只要有位置发生改变都要重新渲染页面
  _render() {
    this.renderer.render(this.scene, this.camera);
  };
  // 设置窗口size(如果浏览器size发生改变, 整个画面要重新渲染)
  _setSize() {
    this.size = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

}