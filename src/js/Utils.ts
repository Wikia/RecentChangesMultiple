import ConstantsApp from "./ConstantsApp";

let $ = (<any>window).jQuery;
let mw = (<any>window).mediaWiki;

//######################################
// General Helper Methods - STATIC
//######################################
export default class Utils
{
	// Allows forEach even on nodelists
	static forEach(collection, callback, pScope?:any) : void { if(collection != undefined) { Array.prototype.forEach.call(collection, callback, pScope); } }
	
	// http://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
	static pad(n:number|string, width:number, z:number|string=0) : string {//Number, max padding (ex:3 = 001), what to pad with (default 0)
		n = n.toString();
		return n.length >= width ? n : new Array(width - n.length + 1).join(z.toString()) + n;
	}
	
	// http://stackoverflow.com/a/4673436/1411473
	static formatString(format:string, ...pArgs:(string|number|boolean)[]) : string {
		var args = Array.prototype.slice.call(arguments, 1);
		return format.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined'
				? args[number]
				: match
			;
		});
	}
	
	// Creates a new HTML element (not jQuery) with specific attributes
	static newElement(tag:string, attributes?:any, parent?:HTMLElement|Element) : HTMLElement {
		var element = document.createElement(tag);
		if(attributes != undefined) {
			for(var key in attributes) {
				if(key == "style") {
					element.style.cssText = attributes[key];
				} else {
					element[key] = attributes[key];
				}
			}
		}
		if(parent != undefined) (<HTMLElement>parent).appendChild(element);
		return element;
	}
	
	static removeElement(pNode:HTMLElement|Element) : void {
		pNode = <HTMLElement>pNode;
		pNode.parentNode.removeChild(pNode);
	}
	
	static addTextTo(pText:string, pNode:HTMLElement|Element) : void {
		(<HTMLElement>pNode).appendChild( document.createTextNode(pText) );
	}
	
	static elemIsVisible(elm:HTMLElement|Element) : boolean {
		var rect = (<HTMLElement>elm).getBoundingClientRect();
		var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
		return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
	}
	
	// Based on: http://stackoverflow.com/a/9229821
	// Remove duplicates
	static uniq_fast_key(a:any[], key:string) : any[] {
		var seen:any = {};
		var out:any[] = [];
		var len:number = a.length;
		var j:number = 0;
		for(var i = 0; i < len; i++) {
			var item:any = a[i];
			if(seen[item[key]] !== 1) {
				seen[item[key]] = 1;
				out[j++] = item;
			}
		}
		return out;
	}
	
	static uniqID() : string {
		return "id"+(++ConstantsApp.uniqID);
	}
	
	static getMinutes(pDate:Date, timeZone) : number{ return timeZone == "utc" ? pDate.getUTCMinutes() : pDate.getMinutes(); }
	static getHours(pDate:Date, timeZone) : number	{ return timeZone == "utc" ? pDate.getUTCHours() : pDate.getHours(); }
	static getDate(pDate:Date, timeZone) : number	{ return timeZone == "utc" ? pDate.getUTCDate() : pDate.getDate(); }
	static getMonth(pDate:Date, timeZone) : number	{ return timeZone == "utc" ? pDate.getUTCMonth() : pDate.getMonth(); }
	static getYear(pDate:Date, timeZone) : number	{ return timeZone == "utc" ? pDate.getUTCFullYear() : pDate.getFullYear(); }
	
	// Convert from MediaWiki time format to one Date object like.
	static getTimestampForYYYYMMDDhhmmSS(pNum:number|string) : string {
		pNum = ""+pNum;
		var i = 0;
		return pNum.slice(i, i+=4) +"-"+ pNum.slice(i, i+=2) +"-"+ pNum.slice(i, i+=2) +"T"+  pNum.slice(i, i+=2) +":"+ pNum.slice(i, i+=2) +":"+ pNum.slice(i, i+=2);
		// return pNum.splice(0, 4) +"-"+ pNum.splice(0, 2) +"-"+ pNum.splice(0, 2) +"T"+  pNum.splice(0, 2) +":"+ pNum.splice(0, 2) +":"+ pNum.splice(0, 2);
	}
	
	static escapeCharacters(pString:string) : string {
		return pString ? pString.replace(/"/g, '&quot;').replace(/'/g, '&apos;') : pString;
	}
	
	static escapeCharactersLink(pString:string) : string {
		return pString ? pString.replace(/%/g, '%25').replace(/ /g, "_").replace(/"/g, '%22').replace(/'/g, '%27').replace(/\?/g, '%3F').replace(/\&/g, '%26').replace(/\+/g, '%2B') : pString;
	}
	
	// UpperCaseFirstLetter
	static ucfirst(s:string) : string { return s && s[0].toUpperCase() + s.slice(1); }
	
	// Assumes the file has already been checked to be in namespace 6
	static isFileAudio(pTitle:string) : boolean {
		var tExt = null, audioExtensions = ["oga", "ogg", "ogv"]; // Audio extensions allowed by Wikia
		for(var i = 0; i < audioExtensions.length; i++) {
			tExt = "."+audioExtensions[i];
			if(pTitle.indexOf(tExt, pTitle.length - tExt.length) !== -1) { return true; } // If title ends with extension.
		}
		return false;
	}
	
	// http://phpjs.org/functions/version_compare/
	// Simulate PHP version_compare
	static version_compare(v1Arg:string|number, v2Arg:string|number, operator:string) : string {
		//       discuss at: http://phpjs.org/functions/version_compare/
		//      original by: Philippe Jausions (http://pear.php.net/user/jausions)
		//      original by: Aidan Lister (http://aidanlister.com/)
		// reimplemented by: Kankrelune (http://www.webfaktory.info/)
		//      improved by: Brett Zamir (http://brett-zamir.me)
		//      improved by: Scott Baker
		//      improved by: Theriault
		//        example 1: version_compare('8.2.5rc', '8.2.5a');
		//        returns 1: 1
		//        example 2: version_compare('8.2.50', '8.2.52', '<');
		//        returns 2: true
		//        example 3: version_compare('5.3.0-dev', '5.3.0');
		//        returns 3: -1
		//        example 4: version_compare('4.1.0.52','4.01.0.51');
		//        returns 4: 1
		var i = 0, x = 0, compare = 0,
			// Leave as negatives so they can come before numerical versions
			vm = { 'dev': -6, 'alpha': -5, 'a': -5, 'beta': -4, 'b': -4, 'RC': -3, 'rc': -3, '#': -2, 'p': 1, 'pl': 1 },
			// Format version string to remove oddities.
			prepVersion = function(v:string|number) : (string|number)[] {
				v = ('' + v)
				.replace(/[_\-+]/g, '.');
				v = v.replace(/([^.\d]+)/g, '.$1.')
					.replace(/\.{2,}/g, '.');
				return (!v.length ? [-8] : v.split('.'));
			};
		// This converts a version component to a number.
		var numVersion = function(v) {
			return !v ? 0 : (isNaN(v) ? vm[v] || -7 : parseInt(v, 10));
		},
		v1 = prepVersion(v1Arg),
		v2 = prepVersion(v2Arg);
		x = Math.max(v1.length, v2.length);
		for (i = 0; i < x; i++) {
			if (v1[i] == v2[i]) { continue; }
			v1[i] = numVersion(v1[i]);
			v2[i] = numVersion(v2[i]);
			if (v1[i] < v2[i]) { compare = -1; break; }
			else if (v1[i] > v2[i]) { compare = 1; break; }
		}
		if (!operator) { return compare.toString(); }
		
		switch (operator) {
			case '>': case 'gt':			{ return (compare > 0).toString(); }
			case '>=': case 'ge':			{ return (compare >= 0).toString(); }
			case '<=': case 'le':			{ return (compare <= 0).toString(); }
			case '==': case '=': case 'eq':	{ return (compare === 0).toString(); }
			case '<>': case '!=': case 'ne':{ return (compare !== 0).toString(); }
			case '': case '<': case 'lt':	{ return (compare < 0).toString(); }
			default:						{ return null; }
		}
	}
}