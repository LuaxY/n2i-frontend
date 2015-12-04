var LargeurBloc = 25;
var CanvaWidth;
var CanvaHeight;

var ctx;

var NbrBlocksWidth;
var NbrBlocksHeight;
var Map;

var IMGbackground;
var IMGgound;

var IMGplayer1_1;
var IMGplayer1_2;

var IMGplayer2_1;
var IMGplayer2_2;

var IMGplayerGround1;
var IMGplayerGround2;

var TargetArm;
var TargetLeg;
var TargetHead;

var BlockHospital;
var HospitalArm;
var HospitalHead;
var HospitalLeg;

var ArmIcon;
var HeadIcon;
var LegIcon;

var PositionPlayerX;
var PositionPlayerY;

var Is_Running = false;

var Is_Left_Pressed = false;
var Is_Right_Pressed = false;
var Is_Up_Pressed = false;

var PlayerSpeed = 5;
var playerGravity = 3;
var PlayerCurentSprite = 1;
var PlayerDirection = true; //True = vers la droite , false = vers la gauche
var CurentTarget = 0; // le passager en cours - 0 = rien

var MaxTarget = 5;
var SpawnProba = 5000;

var Score = 0;

var PauseIMG;

function Victory()
{
	Score++;
	CurentTarget = 0;
}

function Is_Landed()
{
	var DestinationY = Math.ceil((PositionPlayerY+playerGravity)/LargeurBloc);
	var DestinationX = Math.ceil((PositionPlayerX)/LargeurBloc);

	if(Map[DestinationX][DestinationY] == 1)
	{
		return true;
	}
	else if(Map[DestinationX][DestinationY] == 10) // Arm Hospital
	{
		if(CurentTarget == 1) //arm
		{
			Victory();
		}
		return true;
	}
	else if(Map[DestinationX][DestinationY] == 11) // Head Hospital
	{
		if(CurentTarget == 2) //head
		{
			Victory();
		}
		return true;
	}
	else if(Map[DestinationX][DestinationY] == 12) // leg Hospital
	{
		if(CurentTarget == 3) //leg
		{
			Victory();
		}
		return true;
	}
	else
	{
		return false;
	}
}

 $("#LeftButton").bind("touchstart", function (event) {
    Is_Right_Pressed = true;
	PlayerDirection = true;
  });

$( document ).keydown(function(event)
{
	console.log(event);
 	if(event.keyCode == 39)
	{
		Is_Right_Pressed = true;
		PlayerDirection = true;
	}
	if(event.keyCode == 37)
	{
		Is_Left_Pressed = true;
		PlayerDirection = false;
	}
	if(event.keyCode == 38)
	{
		Is_Up_Pressed = true;
	}

	if((event.keyCode == 13) && $('.contentGameZone').hasClass('displayed'))	
	{
		if(Is_Running)
		{
			Is_Running = false;
		}
		else
		{
			Is_Running = true;
		}
	}
});

$( document ).keyup(function(event)
{
 	if(event.keyCode == 39)
	{
		Is_Right_Pressed = false;
	}
	else if(event.keyCode == 37)
	{
		Is_Left_Pressed = false;
	}
	else if(event.keyCode == 38)
	{
		Is_Up_Pressed = false;
	}
});

function LeftAction()
{
	//if(!Is_Landed())
	//{
		if(PositionPlayerX - PlayerSpeed >= 0)
		{
			PositionPlayerX -= PlayerSpeed;
		}
	//}
}

function RightAction()
{
	//if(!Is_Landed())
	//{
		if(PositionPlayerX + PlayerSpeed <= CanvaWidth)
		{
			PositionPlayerX += PlayerSpeed;
		}

	//}
}

function JumpAction()
{
	if(PositionPlayerY - PlayerSpeed*2 >= 0)
	{
		PositionPlayerY -= PlayerSpeed*2;
	}
}

function ApplyGravity()
{
	var DestinationY = Math.ceil((PositionPlayerY+playerGravity)/LargeurBloc);
	var DestinationX = Math.ceil((PositionPlayerX)/LargeurBloc);

	//console.log(DestinationX);

	if(Map[DestinationX][DestinationY] == 1 || Map[DestinationX][DestinationY] == 10 ||Map[DestinationX][DestinationY] == 11 || Map[DestinationX][DestinationY] == 12)
	{
		return;
	}
	else
	{
		PositionPlayerY+=playerGravity;
	}
}

function SpawnTarget()
{
	var NumberOfTarget = 0;

	for(var x= 0; x < NbrBlocksWidth; x++)
	{
	     for(var y= 0; y < NbrBlocksHeight; y++)
		{
			if(Map[x][y] == 2 || Map[x][y] == 3 || Map[x][y] == 4)
			{
				NumberOfTarget++;
			}
		}
	}

	if(NumberOfTarget < MaxTarget)
	{
		for(var x= 0; x < NbrBlocksWidth; x++)
		{
		     for(var y= 0; y < NbrBlocksHeight; y++)
			{
				if(Map[x][y] == 1 && Map[x][y-1] == 0)
				{
					if(Math.floor((Math.random() * SpawnProba) + 1) == 12) // une chance sur 20
					{
						 Map[x][y-1] = 2; //ARM
					}
					else if(Math.floor((Math.random() * SpawnProba) + 1) == 13) // une chance sur 20
					{
						 Map[x][y-1] = 3; //HEAD
					}
					else if(Math.floor((Math.random() * SpawnProba) + 1) == 14) // une chance sur 20
					{
						 Map[x][y-1] = 4; //LEG
					}
				}
			}
		}
	}
}

function GrabTarget()
{
	if(CurentTarget == 0)
	{
		var DestinationY = Math.ceil((PositionPlayerY)/LargeurBloc);
		var DestinationX = Math.ceil((PositionPlayerX)/LargeurBloc);

		switch(Map[DestinationX][DestinationY])
		{
			case 2: //arm
				CurentTarget = 1;
				Map[DestinationX][DestinationY] = 0;
				console.log("Je sauve Cyril");
			break;

			case 3://head
				CurentTarget = 2;
				Map[DestinationX][DestinationY] = 0;
				console.log("Je sauve Dadark");
			break;

			case 4://leg
				CurentTarget = 3;
				Map[DestinationX][DestinationY] = 0;
				console.log("Je sauve Boobizz");
			break;

			default:
				//Ne fais rien mon fils
			break;
		}
	}
	else
	{
		return;
	}
}

function InitMap()
{
	for(var x= 0; x < NbrBlocksWidth; x++)
	{
	     for(var y= 0; y < NbrBlocksHeight; y++)
		{
			Map[x][y] = 0;
		}
	}

    for(var x= 0; x < NbrBlocksWidth; x++)
	{
		Map[x][NbrBlocksHeight -1] = 1;
	}

	for(var x= 0; x < Math.ceil((NbrBlocksWidth-1)/4); x++)
	{
		Map[x][Math.ceil(NbrBlocksHeight/5)] = 1;
	}

	for(var x= 0; x < Math.ceil((NbrBlocksWidth-1)/4); x++)
	{
		Map[x][Math.ceil(NbrBlocksHeight/2)] = 1;
	}

	for(var x= NbrBlocksWidth - Math.ceil((NbrBlocksWidth-1)/4); x < NbrBlocksWidth; x++)
	{
		Map[x][Math.ceil(NbrBlocksHeight/5)] = 1;
	}

	for(var x= NbrBlocksWidth - Math.ceil((NbrBlocksWidth-1)/4); x < NbrBlocksWidth; x++)
	{
		Map[x][Math.ceil(NbrBlocksHeight/2)] = 1;
	}


	Map[1][NbrBlocksHeight-1] = 10;
	Map[1][Math.ceil(NbrBlocksHeight/5)] = 11;
	Map[1][Math.ceil(NbrBlocksHeight/2)] = 12;

	console.log("Array Map --->");
	console.log(Map);
}

function PrintMap()
{
	ctx.drawImage(IMGbackground,0,0,CanvaWidth,CanvaHeight);

	for(var x= 0; x < NbrBlocksWidth; x++)
	{
	     for(var y= 0; y < NbrBlocksHeight; y++)
		{
			switch(Map[x][y])
			{
				case 0:
					// Ne fais rien mon fils
				break;

				case 1: //Sol
					ctx.drawImage(IMGgound,x*LargeurBloc,y*LargeurBloc);
				break;

				case 2: //Arm
					ctx.drawImage(TargetArm,x*LargeurBloc,(y*LargeurBloc)-(TargetArm.height-LargeurBloc));
				break;

				case 3: //Head
					ctx.drawImage(TargetHead,x*LargeurBloc,(y*LargeurBloc)-(TargetHead.height-LargeurBloc));
				break;

				case 4: //Leg
					ctx.drawImage(TargetLeg,x*LargeurBloc,(y*LargeurBloc)-(TargetLeg.height-LargeurBloc));
				break;

				case 10: //Hospital Arm
					ctx.drawImage(BlockHospital,x*LargeurBloc,y*LargeurBloc);
					ctx.drawImage(HospitalArm,x*LargeurBloc-((HospitalArm.width-LargeurBloc)/2),y*LargeurBloc-(HospitalArm.height));
				break;

				case 11: //Hospital Head
					ctx.drawImage(BlockHospital,x*LargeurBloc,y*LargeurBloc);
					ctx.drawImage(HospitalHead,x*LargeurBloc-((HospitalHead.width-LargeurBloc)/2),y*LargeurBloc-(HospitalHead.height));
				break;

				case 12: //Hospital Leg
					ctx.drawImage(BlockHospital,x*LargeurBloc,y*LargeurBloc);
					ctx.drawImage(HospitalLeg,x*LargeurBloc-((HospitalLeg.width-LargeurBloc)/2),y*LargeurBloc-(HospitalLeg.height));
				break;
			}
		}
	}

	if(Is_Landed()) //Si l'helico est posé au sol
	{
		if(PlayerDirection) //droite
		{
			ctx.drawImage(IMGplayerGround1,PositionPlayerX-(IMGplayerGround1.width/2),PositionPlayerY-(IMGplayerGround1.height/2));
		}
		else //gauche
		{
			ctx.drawImage(IMGplayerGround2,PositionPlayerX-(IMGplayerGround2.width/2),PositionPlayerY-(IMGplayerGround2.height/2));
		}
	}
	else
	{
		switch(PlayerCurentSprite)
		{
			case 1:
				if(PlayerDirection) //droite
				{
					ctx.drawImage(IMGplayer1_1,PositionPlayerX-(IMGplayer1_1.width/2),PositionPlayerY-(IMGplayer1_1.height/2));
				}
				else //gauche
				{
					ctx.drawImage(IMGplayer2_1,PositionPlayerX-(IMGplayer2_1.width/2),PositionPlayerY-(IMGplayer2_1.height/2));
				}

				PlayerCurentSprite = 2;
				console.log("sprite player 1");
			break;

			case 2:
				if(PlayerDirection) //droite
				{
					ctx.drawImage(IMGplayer1_2,PositionPlayerX-(IMGplayer1_1.width/2),PositionPlayerY-(IMGplayer1_1.height/2));
				}
				else //gauche
				{
					ctx.drawImage(IMGplayer2_2,PositionPlayerX-(IMGplayer2_1.width/2),PositionPlayerY-(IMGplayer2_1.height/2));
				}
				PlayerCurentSprite = 1;
				console.log("sprite player 2");
			break;
		}

	}

	switch(CurentTarget)
	{
		case 1:
			ctx.drawImage(ArmIcon,PositionPlayerX-(ArmIcon.width/2)+10,PositionPlayerY-(ArmIcon.height/2)+10);
		break;

		case 2:
			ctx.drawImage(HeadIcon,PositionPlayerX-(HeadIcon.width/2)+10,PositionPlayerY-(HeadIcon.height/2)+10);
		break;

		case 3:
			ctx.drawImage(LegIcon,PositionPlayerX-(LegIcon.width/2)+10,PositionPlayerY-(LegIcon.height/2)+10);
		break;

		default:
			//Ne fais rien mon fils
		break;
	}

	ctx.font = "20px Arial";
	ctx.fillText("Score : " + Score,5,20);
}

function Game_Frame()
{
	if(!Is_Running)
	{
		ctx.drawImage(IMGbackground,0,0,CanvaWidth,CanvaHeight);
		ctx.drawImage(PauseIMG,Math.ceil(CanvaWidth/2)-Math.ceil(PauseIMG.width/2),Math.ceil(CanvaHeight/2)-Math.ceil(PauseIMG.height/2));
		return;
	}
	else
	{
		console.log('Boucle principale');
		if(Is_Left_Pressed)
		{
			LeftAction();
		}
		if(Is_Right_Pressed)
		{
			RightAction();
		}
		if(Is_Up_Pressed)
		{
			JumpAction();
		}
		ApplyGravity();
		SpawnTarget();
		GrabTarget();
		PrintMap();
	}
}

window.onload = function()
{
	var canvas = document.getElementById('GameCanvas');
	ctx = canvas.getContext('2d');

	CanvaWidth = Math.ceil($('#GameCanvas').parent().width());
	CanvaHeight = Math.ceil($('#GameCanvas').parent().height());

	NbrBlocksWidth =  Math.ceil(CanvaWidth / LargeurBloc);
	NbrBlocksHeight =  Math.ceil(CanvaHeight / LargeurBloc);

	IMGbackground = new Image();
	IMGbackground.src = "img/sky.png";

	IMGgound = new Image()
	IMGgound.src = "img/grass.png";

	IMGplayer1_1 = new Image();
	IMGplayer1_1.src = "img/player1_1.png";

	IMGplayer1_2 = new Image();
	IMGplayer1_2.src = "img/player1_2.png";

	IMGplayer2_1 = new Image();
	IMGplayer2_1.src = "img/player2_1.png";

	IMGplayer2_2 = new Image();
	IMGplayer2_2.src = "img/player2_2.png";

	IMGplayerGround1 = new Image();
	IMGplayerGround1.src = "img/playerground1.png";

	IMGplayerGround2 = new Image();
	IMGplayerGround2.src = "img/playerground2.png";

	TargetHead = new Image();
	TargetHead.src = "img/character_head.png";

	TargetArm = new Image();
	TargetArm.src = "img/character_arm.png";

	TargetLeg = new Image();
	TargetLeg.src = "img/character_leg.png";

	BlockHospital = new Image();
	BlockHospital.src = "img/arrivee.png";

	HospitalArm = new Image();
	HospitalArm.src = "img/hospital_arm.png";

	HospitalHead = new Image();
	HospitalHead.src = "img/hospital_head.png";

	HospitalLeg = new Image();
	HospitalLeg.src = "img/hospital_leg.png";

	ArmIcon = new Image();
	ArmIcon.src = "img/arm.png";

	HeadIcon = new Image();
	HeadIcon.src = "img/head.png";

	LegIcon = new Image();
	LegIcon.src = "img/leg.png";

	PauseIMG = new Image();
	PauseIMG.src = "img/pause.png";

	PositionPlayerX = Math.ceil(CanvaWidth/2);
	PositionPlayerY = 0;

	canvas.width  = CanvaWidth;
	canvas.height = CanvaHeight;

	Map = [];
	for(var x= 0; x < NbrBlocksWidth; x++)
	{
		Map[x] = [];
	     for(var y= 0; y < NbrBlocksHeight; y++)
		{
			Map[x][y] = 0;
		}
	}

	console.log("NbrBlocksWidth --> "+ NbrBlocksWidth);
	console.log("NbrBlocksHeight --> "+ NbrBlocksHeight);

	InitMap();
	PrintMap();

	setInterval(Game_Frame, 20);
}
