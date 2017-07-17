/*
 * @Author: Marte
 * @Date:   2017-07-05 17:18:30
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-07-06 09:44:02
 */

'use strict';

var game = new Phaser.Game(240, 400, Phaser.auto, 'game');
game._width=800;
console.log(game);
/***
 *   初始化地图；
 */
function mapInit() {
	var pointer;
	var mousePointer;
	var myControler = false; //默认没用控制任何事物；
	this.preload = function() {
		game.load.image('bg', 'img/map.jpg');
		game.load.spritesheet('gongji', 'img/com.png', 64, 64, 16);
		game.load.spritesheet('xb', 'img/attack.png', 48, 64, 16);
	};

	this.create = function() {
		var bg = game.add.image(0, 0, 'bg');

		//设置场景地图边界
		game.world.setBounds(0, 0, 1152, 1152);
		this.gongbing();
		//获取鼠标指针
		pointer = game.input.activePointer;

	};
	this.update = function() {
		if(pointer.position.x > game.width - 20 && pointer.position.x < game.width - 5) {
			game.camera.x -= 2;
		}

		//		else if(pointer.position.x>game.width-20){
		//			game.camera.x+=2;
		//		}else if(pointer.position.y<20){
		//			game.camera.y-=2;
		//		}else if(pointer.position.y>game.height-20){
		//			game.camera.y+=2;
		//		}

	};
	/**
	 *  一个工兵的实例对象
	 */
	this.gongbing = function() {
		this.xb = game.add.sprite(0, 0, 'xb');
		this.xb.animations.add('down', [0, 1, 2, 3]);
		this.xb.animations.add('left', [4, 5, 6, 7]);
		this.xb.animations.add('right', [8, 9, 10, 11]);
		this.xb.animations.add('up', [12, 13, 14, 15]);
		this.xb.inputEnabled = true;
		var events = this.xb.events;
		var that = this;
		this.onDown = function() {
			console.log(myControler);
			 		that.xb.y+=2;
			 		that.xb.animations.play('down',8,1);
			 		that.xb.animations.play('up',8,true);
		};
		events.onInputDown.add(this.onDown);
		
	};
}

game.state.add('mapInit', mapInit);
game.state.start('mapInit');