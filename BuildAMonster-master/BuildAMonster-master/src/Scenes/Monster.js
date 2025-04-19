class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.leftLegX = this.bodyX-70;
        this.leftLegY = this.bodyY+140;

        this.rightLegX = this.bodyX+70;
        this.rightLegY = this.bodyY+140;

        this.leftArmX = this.bodyX-90;
        this.leftArmY = this.bodyY+60;

        this.rightArmX = this.bodyX+90;
        this.rightArmY = this.bodyY+60;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY-50;
        
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY+50;

        this.leftHornX = this.bodyX-50;
        this.leftHornY = this.bodyY-100;

        this.rightHornX = this.bodyX+50;
        this.rightHornY = this.bodyY-100;

        this.noseX = this.bodyX;
        this.noseY = this.bodyY+15;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_yellowE.png");

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_blueE.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_blueE.png");

        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_greenA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_greenA.png");

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_psycho_light.png");

        my.sprite.mouthSmile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouthFangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");

        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_blue_horn_small.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_blue_horn_small.png");

        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_green.png");

        my.sprite.mouthFangs.visible = false;

        this.input.keyboard.enabled = true;
        this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.f = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.s_pressed = false;
        this.f_pressed = false;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.a.isDown){
            for (let prop in my.sprite) {
                my.sprite[prop].x -= 1;
            }
        }

        if(this.d.isDown){
            for (let prop in my.sprite) {
                my.sprite[prop].x += 1;
            }
        }

        if(this.s.isDown && !this.s_pressed){
            my.sprite.mouthFangs.visible = false;
            my.sprite.mouthSmile.visible = true;
            this.s_pressed = true;
        }
        
        if(this.f.isDown && !this.f_pressed){
            my.sprite.mouthFangs.visible = true;
            my.sprite.mouthSmile.visible = false;
            this.f_pressed = true;
        }
        
        if(!this.s.isDown){this.s_pressed = false}
        if(!this.f.isDown){this.f_pressed = false}
       
    }

}