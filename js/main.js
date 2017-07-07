/*
 * @Author: Marte
 * @Date:   2017-07-05 17:18:30
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-07-06 09:44:02
 */

'use strict';

var game = new Phaser.Game(240, 400, Phaser.auto, 'game');

/***
 *   初始化地图；
 */
function mapInit(){
	var pointer;
	var mousePointer;
	this.preload = function(){
		game.load.image('bg','img/map.jpg');
		game.load.spritesheet('xiaobing','img/com.png',64,64,16);
	};
	
	this.create = function(){
		var bg = game.add.image(0,0,'bg');
		var xb = game.add.sprite(0,0,'xiaobing');
		xb.animations.add('fly',[0,1,2,3]);
		xb.inputEnabled=true;
       	var events = xb.events;
       	
       	events.onInputDown.add(function(){
       		xb.animations.play('fly',8,1);
       	});
		//设置场景地图边界
		game.world.setBounds(0,0,1152,1152);
		//获取鼠标指针
		pointer = game.input.activePointer;
		
	};
	this.update= function(){
		if(pointer.position.x>game.width-20&&pointer.position.x<game.width-5){
			game.camera.x+=2;
		}
		
//		else if(pointer.position.x>game.width-20){
//			game.camera.x+=2;
//		}else if(pointer.position.y<20){
//			game.camera.y-=2;
//		}else if(pointer.position.y>game.height-20){
//			game.camera.y+=2;
//		}
		 
	} 
}


game.state.add('mapInit',mapInit);
game.state.start('mapInit');