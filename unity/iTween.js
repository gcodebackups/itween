/*
private var impact : boolean;
private var calculatedVector2 : Vector2;
private var calculatedColor : Color;
private var calculatedInt : float;
private var calculatedFloat : float;
private var calculatedRect : Rect;
private var startColor : Color;
private var startInt : float;
private var startFloat : float;
private var startRect : Rect;
private var endInt : float;
private var endFloat : float;
private var endRect : Rect;
private var audioSource : AudioSource;


static function rectValue(target : GameObject, args : Hashtable) : void{
		args["method"]="rect";

static function vector2Value(target : GameObject, args : Hashtable) : void{
		args["method"]="vector2";

static function vector3Value(target : GameObject, args : Hashtable) : void{
		args["method"]="vector3";

static function colorValue(target : GameObject, args : Hashtable) : void{
		args["method"]="color";

static function floatValue(target : GameObject, args : Hashtable) : void{
		args["method"]="float";

static function intValue(target : GameObject, args : Hashtable) : void{
		args["method"]="int";
	if(!args.Contains("audioSource")){
		audioTo(target.audio,args);
	}else{
		init(target,args);	
	}
}
	args["audioSource"]=target;
				case "value":;
				
				case "audio":
					if(tween.audioSource == audioSource){
						tween.tweenDispose();
					}
				break;
		//value
		case "value":
			switch (method){
				//rect
				case "rect":
				
				//vector2
				case "vector2":
				
				//vector3
				case "vector3":
				
				//color
				case "color":

				case "int":
		
				//float:
			}	
		break;
			audioSource = args["audioSource"];
		case "value":
			switch (method){
				//rect:
				case "rect":
					calculatedRect.y = transition(startRect.y,endRect.y,percentage);
					calculatedRect.width = transition(startRect.width,endRect.width,percentage);
					calculatedRect.height = transition(startRect.height,endRect.height,percentage);
				
				//vector2:
				case "vector2":
					calculatedVector2.y = transition(startVector2.y,endVector2.y,percentage);
				
				//vector3:
				case "vector3":
					calculatedVector3.y = transition(startVector3.y,endVector3.y,percentage);
					calculatedVector3.z = transition(startVector3.z,endVector3.z,percentage);
				
				//color:
				case "color":
					calculatedColor.g = transition(startColor.g,endColor.g,percentage);
					calculatedColor.b = transition(startColor.b,endColor.b,percentage);
					calculatedColor.a = transition(startColor.a,endColor.a,percentage);
			
				case "int":
	
				//float:
			}	
		break;
				
	percentage=1;	//dial in percentage to 1
	tweenUpdate(); 	//final run of the equation to ensure values are set
				case "value":
					switch(method){
						//rect:
						case "recr":
							calculatedRect = startRect;
						
						//vector2:
						case "vector2":
							calculatedVector2 = startVector2;
						
						//vector3:
						case "vector3":
							calculatedVector3 = startVector3;
						
						//color:
						case "color":
							calculatedColor = startColor;
				
						//int:
						case "int":
							calculatedFloat = startInt;
				
						//float:
							calculatedFloat = startFloat;
					}				
				break;
						
				case "value":
					switch(method){
						//rect:
						case "rect":
							args["to"]=startRect;
						
						//vector2:
						case "vector2":
							args["to"]=startVector2;
						
						//vector3:
						case "vector3":
							args["to"]=startVector3;
						
						//color:
						case "color":
							args["to"]=startColor;
				
						//int:
						case "int":
							args["to"]=startInt;
							args["from"]=endInt;
						break;
				
						//float:
						case "float":
							args["to"]=startFloat;
							args["from"]=endFloat;
						break;	
					}				
				break;
								