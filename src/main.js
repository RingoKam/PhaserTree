import Phaser from 'phaser-ce'

const docElement = document.documentElement
const width = docElement.clientWidth
const height = docElement.clientHeight
let currentTime = 0;

// let stage1 = true;
// let stage2 = true;
// let stage3 = true;
// let stage4 = true;
// let stage5 = true;
// let stage6 = true;

let stage1 = false;
let stage2 = false;
let stage3 = false;
let stage4 = false;
let stage5 = false;
let stage6 = false;

let rightBranchCoordinates = {
    branch1: {
        w: 262,
        h: 536
    },
    branch2: {
        w: 257,
        h: 619 - 90 * 2
    },
    branch3: {
        w: 257,
        h: 619 - 90 * 3
    },
    branch4: {
        w: 257,
        h: 619 - 90 * 4
    }
}

let leftBranchCoordinates = {
    branch1: {
        w: (width) / 2 + 55,
        h: height - 200
    },
    branch2: {
        w: (width) / 2 + 50,
        h: height - 117 - 90 * 2
    },
    branch3: {
        w: (width) / 2 + 50,
        h: height - 117 - 90 * 3
    },
    branch4: {
        w: (width) / 2 + 50,
        h: height - 117 - 90 * 4
    }
}

//declare global game object
var game = new Phaser.Game(width, height, Phaser.CANVAS, 'money-tree', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

function preload() {
    game.load.spritesheet('acorn', 'assets/images/acorn2.png', 501, 507);
    game.load.spritesheet('trunk', 'assets/images/trunk.png', 640, 640);
    game.load.spritesheet('left_branch', 'assets/images/left_branch.png', 640, 640);
    game.load.spritesheet('right_branch', 'assets/images/right-branch.png', 640, 640);
    game.load.spritesheet('tree', 'assets/images/tree1.png', 640, 640);
    game.load.spritesheet('squirrel', 'assets/images/squirrel.png', 1110, 1226);
}

var line1;

function create() {
    game.stage.backgroundColor = '#FFFFFF';
    game.time.events.loop(800, function () {
        spawnAcorn();
    }, game);
    game.time.events.loop(1000, updateTimer, game);


    var trunk = game.add.sprite((width) / 2, height - 115, 'trunk')
    trunk.scale.setTo(0.9, 0.9)
    trunk.anchor.set(0.5);

    var rightBranch1 = game.add.sprite((width) / 2 + 55, height - 200, 'right_branch')
    rightBranch1.scale.setTo(0.6, 0.6)
    rightBranch1.anchor.set(0.5);

    var acorn = game.add.sprite(290, height - 200, 'acorn')
    acorn.scale.setTo(0.05, 0.05)
    acorn.anchor.set(0.5);

    if (stage1) {
        var tree1 = game.add.sprite((width) / 2 - 20, height - 117 - 115, 'tree')
        tree1.scale.setTo(0.9, 0.9)
        tree1.anchor.set(0.5);

        var leftBranch1 = game.add.sprite((width) / 2 - 70, height - 100, 'left_branch')
        leftBranch1.scale.setTo(0.6, 0.6)
        leftBranch1.anchor.set(0.5);
    }

    if (stage2) {
        var tree2 = game.add.sprite((width) / 2 - 20, height - 117 - 90 * 2, 'tree')
        tree2.scale.setTo(0.9, 0.9)
        tree2.anchor.set(0.5);

        var rightBranch2 = game.add.sprite((width) / 2 + 50, height - 117 - 90 * 2, 'right_branch')
        rightBranch2.scale.setTo(0.6, 0.6)
        rightBranch2.anchor.set(0.5);

        rightBranch1.scale.setTo(0.8)
    }

    if (stage3) {
        var tree3 = game.add.sprite((width) / 2 - 20, height - 117 - 90 * 3, 'tree')
        tree3.scale.setTo(0.9, 0.9)
        tree3.anchor.set(0.5);

        var leftBranch3 = game.add.sprite(leftBranchCoordinates.branch3.w, leftBranchCoordinates.branch3.h, 'right_branch')
        leftBranch3.scale.setTo(0.6, 0.6)
        leftBranch3.anchor.set(0.5);

        leftBranch1.scale.set(0.8)
    }
    if (stage4) {
        var tree4 = game.add.sprite((width) / 2 - 20, height - 117 - 90 * 4, 'tree')
        tree4.scale.setTo(0.9, 0.9);
        tree4.anchor.set(0.5);
    }

    if (stage5) {
        var tree5 = game.add.sprite((width) / 2 - 20, height - 117 - 90 * 5, 'tree')
        tree5.scale.setTo(0.9, 0.9)
        tree5.anchor.set(0.5);

        var tree6 = game.add.sprite((width) / 2 - 20, height - 117 - 90 * 6, 'tree')
        tree6.scale.setTo(0.9, 0.9)
        tree6.anchor.set(0.5);
    }


    var squirrel = game.add.sprite(width / 2, height - 30, "squirrel")
    squirrel.scale.setTo(0.05, 0.05);
    squirrel.anchor.set(0.5);
    // handle2 = game.add.sprite(400, 300, 'balls', 0);
    // handle2.anchor.set(0.5);
    // handle2.inputEnabled = true;
    // handle2.input.enableDrag(true);    
}

function update() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
        stage1 = true;
        create();
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        stage2 = true;
        create();
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.E)) {
        stage3 = true;
        create();
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.R)) {
        stage4 = true;
        create();
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.T)) {
        stage5 = true;
        create();
    }
}

function updateTimer() {
    currentTime++;
    // console.log(currentTime)
}

function spawnAcorn() {

}

function render() {
    // game.debug.geom(line1);
    // game.debug.lineInfo(line1, 32, 32);
    game.debug.text(height, 32, 550);
}