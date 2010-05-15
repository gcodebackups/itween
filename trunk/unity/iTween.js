/**
 * iTween
 * Animation/tween framework for Unity based off the mechanisims and solutions established in the Flash tween world
 *
 * @author Bob Berkebile, Patrick Corkum
 * @version 2.0.0
 */

/*
Licensed under the MIT License

Copyright (c) 2009-2010 Bob Berkebile, Patrick Corkum

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

http://itween.pixelplacement.com
http://code.google.com/p/itween/
*/

/*
TERMS OF USE - EASING EQUATIONS
Open source under the BSD License.
Copyright (c)2001 Robert Penner
All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

//########
var time : float = defaults["time"];

static function moveFrom(target : GameObject, args : Hashtable) : void{

	if(!args.Contains("isLocal")){
static function rotateFrom(target : GameObject, args : Hashtable) : void{

//scale:
static function scaleFrom(target : GameObject, args : Hashtable) : void{

//count:
//Add type counts for everything like stops!

//get number of iTweens running on every child of a GameObject:
//JUST RUN A count(target : GameObject) on each child!

//get number of iTweens running in scene:
static function count() : int{

//get number of iTweens running on GameObject:
static function count(target : GameObject) : int{

//stop:
//stop all iTweens running on every child of a GameObject:
//JUST RUN A stop(target : GameObject) on each child!
//JUST RUN A stop(target : GameObject, type : String) on each child!


		//move:
			
					
		
		//rotation:
			
					calculatedVector3=Vector3(clerp(startVector3.x,endVector3.x,1),clerp(startVector3.y,endVector3.y,1),clerp(startVector3.z,endVector3.z,1));
					endVector3=calculatedVector3;
						
					endVector3+=calculatedVector3;
				
					method="add";
					calculatedVector3*=360;
					endVector3+=calculatedVector3;
		
		//scale:
		case "scale":
						
							
					endVector3+=calculatedVector3;
				
					calculatedVector3=Vector3.one;
					method="add";
					endVector3=Vector3(calculatedVector3.x*startVector3.x,calculatedVector3.y*startVector3.y,calculatedVector3.z*startVector3.z);

private function callBack(version : String) : void{

			//move:
				args["position"]=startVector3;
			
			//rotation:
			case "rotate":
				args["rotation"]=startVector3;
			
			//scale:
			case "scale":
				args["scale"]=startVector3;
		//move:
		
		//rotate:
			switch(method){
				case "to":
					calculatedVector3.x = transition(startVector3.x,endVector3.x,percentage);
					if(isLocal){
				break;
				
				case "add":
					calculatedVector3.x = transition(startVector3.x,endVector3.x,percentage);
					if(isLocal){
				break;
			}
		
		case "scale":
			calculatedVector3.x = transition(startVector3.x,endVector3.x,percentage);
			transform.localScale=calculatedVector3;
		break;

		
			//Leaving this null for now; its difficult to figure out wihtout imperfections. You can deal with oddly displayed but dead-on values; life isn't perfect.
	if(args.Contains("loopType")){
				//move:
				
				//rotate:
				
				//scale:
				case "scale":
				//move:
				
				//rotate:
				
				//scale:

