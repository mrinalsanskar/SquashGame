var paddle, ball, score;

function setup() {
    createCanvas(700, 700);
    paddle = createSprite(100, 692, 80, 10);
    ball = createSprite(200, 340, 10, 10);
    paddle.shapeColor = "red";
    ball.shapeColor = "red";
    score = 0;
    createEdgeSprites();
}

function draw() {
    background("black");
    text("SPACE TO START", 590, 20)
    text("SCORE : " + score, 10, 20);

    //Make the paddle move
    paddle.x = mouseX;

    //Make the paddle move on pressing space
    if (keyDown("space")) {
        ball.setVelocity(10, -5);
    }

    //Increase the score
    if (ball.isTouching(paddle)) {
        score = score + 100;
    }

    //Bounce Off
    ball.bounceOff(edges);
    ball.bounceOff(paddle);

    //Game Over
    if (ball.y >= 692) {
        text("GAME OVER", 320, 300);
        ball.destroy();
    }

    drawSprites();
}