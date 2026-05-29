(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const _a="177",Hl=0,Ha=1,Gl=2,$o=1,Ko=2,fn=3,Pn=0,Rt=1,pn=2,_n=0,gi=1,Ls=2,Ga=3,Wa=4,Wl=5,Vn=100,Xl=101,ql=102,Yl=103,$l=104,Kl=200,Zl=201,jl=202,Jl=203,Cr=204,Rr=205,Ql=206,ec=207,tc=208,nc=209,ic=210,sc=211,rc=212,ac=213,oc=214,Pr=0,Dr=1,Lr=2,Mi=3,Ir=4,Ur=5,Nr=6,Fr=7,Zo=0,lc=1,cc=2,Cn=0,hc=1,uc=2,dc=3,jo=4,fc=5,pc=6,mc=7,Jo=300,yi=301,Si=302,Br=303,Or=304,ks=306,zr=1e3,Wn=1001,kr=1002,jt=1003,gc=1004,Ki=1005,sn=1006,qs=1007,Xn=1008,rn=1009,Qo=1010,el=1011,zi=1012,va=1013,qn=1014,mn=1015,vn=1016,xa=1017,Ma=1018,ki=1020,tl=35902,nl=1021,il=1022,Zt=1023,Vi=1026,Hi=1027,sl=1028,ya=1029,rl=1030,Sa=1031,Ea=1033,Ss=33776,Es=33777,Ts=33778,bs=33779,Vr=35840,Hr=35841,Gr=35842,Wr=35843,Xr=36196,qr=37492,Yr=37496,$r=37808,Kr=37809,Zr=37810,jr=37811,Jr=37812,Qr=37813,ea=37814,ta=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,ws=36492,la=36494,ca=36495,al=36283,ha=36284,ua=36285,da=36286,_c=3200,vc=3201,ol=0,xc=1,An="",Ot="srgb",Ei="srgb-linear",Is="linear",nt="srgb",Zn=7680,Xa=519,Mc=512,yc=513,Sc=514,ll=515,Ec=516,Tc=517,bc=518,wc=519,fa=35044,qa="300 es",gn=2e3,Us=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,Ns=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Ac(i,e){return(i%e+e)%e}function $s(i,e,t){return(1-t)*i+t*e}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==m||u!==g){let p=1-o;const h=l*f+c*m+u*g+d*v,T=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const D=Math.sqrt(E),C=Math.atan2(D,h*T);p=Math.sin(p*C)/D,o=Math.sin(o*C)/D}const y=o*T;if(l=l*p+f*y,c=c*p+m*y,u=u*p+g*y,d=d*p+v*y,p===1-o){const D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-o*m,e[t+2]=c*g+u*m+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ya.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ya.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new L,Ya=new Wi;class ze{constructor(e,t,n,s,r,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],v=s[0],p=s[3],h=s[6],T=s[1],E=s[4],y=s[7],D=s[2],C=s[5],w=s[8];return r[0]=a*v+o*T+l*D,r[3]=a*p+o*E+l*C,r[6]=a*h+o*y+l*w,r[1]=c*v+u*T+d*D,r[4]=c*p+u*E+d*C,r[7]=c*h+u*y+d*w,r[2]=f*v+m*T+g*D,r[5]=f*p+m*E+g*C,r[8]=f*h+m*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,m=c*r-a*l,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new ze;function cl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cc(){const i=Fs("canvas");return i.style.display="block",i}const $a={};function _i(i){i in $a||($a[i]=!0,console.warn(i))}function Rc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Pc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ka=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Za=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lc(){const i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?Is:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _i("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _i("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:e,whitePoint:n,transfer:Is,toXYZ:Ka,fromXYZ:Za,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Ka,fromXYZ:Za,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const Ke=Lc();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jn;class Ic{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jn===void 0&&(jn=Fs("canvas")),jn.width=e.width,jn.height=e.height;const s=jn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uc=0;class Ta{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(js(s[a].image)):r.push(js(s[a]))}else r=js(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ic.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nc=0;const Js=new L;class Pt extends wi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Wn,s=Wn,r=sn,a=Xn,o=Zt,l=rn,c=Pt.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Rn(),this.name="",this.source=new Ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Js).x}get height(){return this.source.getSize(Js).y}get depth(){return this.source.getSize(Js).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Jo;Pt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(m+1)/2,D=(h+1)/2,C=(u+f)/4,w=(d+v)/4,I=(g+p)/4;return E>y&&E>D?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=w/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=C/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=w/r,s=I/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(d-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fc extends wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Pt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ta(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hl extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bc extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(r,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),ji.subVectors(this.max,Pi),Jn.subVectors(e.a,Pi),Qn.subVectors(e.b,Pi),ei.subVectors(e.c,Pi),Mn.subVectors(Qn,Jn),yn.subVectors(ei,Qn),In.subVectors(Jn,ei);let t=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-In.z,In.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,In.z,0,-In.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-In.y,In.x,0];return!Qs(t,Jn,Qn,ei,ji)||(t=[1,0,0,0,1,0,0,0,1],!Qs(t,Jn,Qn,ei,ji))?!1:(Ji.crossVectors(Mn,yn),t=[Ji.x,Ji.y,Ji.z],Qs(t,Jn,Qn,ei,ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new L,new L,new L,new L,new L,new L,new L,new L],qt=new L,Zi=new Xi,Jn=new L,Qn=new L,ei=new L,Mn=new L,yn=new L,In=new L,Pi=new L,ji=new L,Ji=new L,Un=new L;function Qs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Un.fromArray(i,r);const o=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),l=e.dot(Un),c=t.dot(Un),u=n.dot(Un);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Oc=new Xi,Di=new L,er=new L;class Vs{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Oc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Di,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(er)),this.expandByPoint(Di.copy(e.center).sub(er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cn=new L,tr=new L,Qi=new L,Sn=new L,nr=new L,es=new L,ir=new L;class ul{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tr.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(tr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),o=Sn.dot(this.direction),l=-Sn.dot(Qi),c=Sn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*l-o,f=a*o-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tr).addScaledVector(Qi,f),m}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,s,r){nr.subVectors(t,e),es.subVectors(n,e),ir.crossVectors(nr,es);let a=this.direction.dot(ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const l=o*this.direction.dot(es.crossVectors(Sn,es));if(l<0)return null;const c=o*this.direction.dot(nr.cross(Sn));if(c<0||l+c>a)return null;const u=-o*Sn.dot(ir);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,s,r,a,o,l,c,u,d,f,m,g,v,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,f,m,g,v,p)}set(e,t,n,s,r,a,o,l,c,u,d,f,m,g,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ti.setFromMatrixColumn(e,0).length(),r=1/ti.setFromMatrixColumn(e,1).length(),a=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,v=c*d;t[0]=f+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zc,e,kc)}lookAt(e,t,n){const s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),En.crossVectors(n,Ft),En.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),En.crossVectors(n,Ft)),En.normalize(),ts.crossVectors(Ft,En),s[0]=En.x,s[4]=ts.x,s[8]=Ft.x,s[1]=En.y,s[5]=ts.y,s[9]=Ft.y,s[2]=En.z,s[6]=ts.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],h=n[14],T=n[3],E=n[7],y=n[11],D=n[15],C=s[0],w=s[4],I=s[8],S=s[12],M=s[1],R=s[5],k=s[9],B=s[13],W=s[2],Y=s[6],G=s[10],Z=s[14],V=s[3],ie=s[7],ue=s[11],xe=s[15];return r[0]=a*C+o*M+l*W+c*V,r[4]=a*w+o*R+l*Y+c*ie,r[8]=a*I+o*k+l*G+c*ue,r[12]=a*S+o*B+l*Z+c*xe,r[1]=u*C+d*M+f*W+m*V,r[5]=u*w+d*R+f*Y+m*ie,r[9]=u*I+d*k+f*G+m*ue,r[13]=u*S+d*B+f*Z+m*xe,r[2]=g*C+v*M+p*W+h*V,r[6]=g*w+v*R+p*Y+h*ie,r[10]=g*I+v*k+p*G+h*ue,r[14]=g*S+v*B+p*Z+h*xe,r[3]=T*C+E*M+y*W+D*V,r[7]=T*w+E*R+y*Y+D*ie,r[11]=T*I+E*k+y*G+D*ue,r[15]=T*S+E*B+y*Z+D*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*m-n*l*m)+v*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+p*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-t*l*d+t*o*f+s*a*d-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],h=e[15],T=d*p*c-v*f*c+v*l*m-o*p*m-d*l*h+o*f*h,E=g*f*c-u*p*c-g*l*m+a*p*m+u*l*h-a*f*h,y=u*v*c-g*d*c+g*o*m-a*v*m-u*o*h+a*d*h,D=g*d*l-u*v*l-g*o*f+a*v*f+u*o*p-a*d*p,C=t*T+n*E+s*y+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=T*w,e[1]=(v*f*r-d*p*r-v*s*m+n*p*m+d*s*h-n*f*h)*w,e[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*h+n*l*h)*w,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*m-n*l*m)*w,e[4]=E*w,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*h+t*f*h)*w,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*h-t*l*h)*w,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*m+t*l*m)*w,e[8]=y*w,e[9]=(g*d*r-u*v*r-g*n*m+t*v*m+u*n*h-t*d*h)*w,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*h+t*o*h)*w,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*m-t*o*m)*w,e[12]=D*w,e[13]=(u*v*s-g*d*s+g*n*f-t*v*f-u*n*p+t*d*p)*w,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*p-t*o*p)*w,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,m=r*u,g=r*d,v=a*u,p=a*d,h=o*d,T=l*c,E=l*u,y=l*d,D=n.x,C=n.y,w=n.z;return s[0]=(1-(v+h))*D,s[1]=(m+y)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(m-y)*C,s[5]=(1-(f+h))*C,s[6]=(p+T)*C,s[7]=0,s[8]=(g+E)*w,s[9]=(p-T)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ti.set(s[0],s[1],s[2]).length();const a=ti.set(s[4],s[5],s[6]).length(),o=ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yt.copy(this);const c=1/r,u=1/a,d=1/o;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=d,Yt.elements[9]*=d,Yt.elements[10]*=d,t.setFromRotationMatrix(Yt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=gn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(o===gn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Us)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),f=(t+e)*c,m=(n+s)*u;let g,v;if(o===gn)g=(a+r)*d,v=-2*d;else if(o===Us)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new L,Yt=new ct,zc=new L(0,0,0),kc=new L(1,1,1),En=new L,ts=new L,Ft=new L,ja=new ct,Ja=new Wi;class an{constructor(e=0,t=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ja,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vc=0;const Qa=new L,ni=new Wi,hn=new ct,ns=new L,Li=new L,Hc=new L,Gc=new Wi,eo=new L(1,0,0),to=new L(0,1,0),no=new L(0,0,1),io={type:"added"},Wc={type:"removed"},ii={type:"childadded",child:null},sr={type:"childremoved",child:null};class rt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new L,t=new an,n=new Wi,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new ze}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(eo,e)}rotateY(e){return this.rotateOnAxis(to,e)}rotateZ(e){return this.rotateOnAxis(no,e)}translateOnAxis(e,t){return Qa.copy(e).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eo,e)}translateY(e){return this.translateOnAxis(to,e)}translateZ(e){return this.translateOnAxis(no,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Li,ns,this.up):hn.lookAt(ns,Li,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),ni.setFromRotationMatrix(hn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(io),ii.child=e,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wc),sr.child=e,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(io),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,Hc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Gc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}rt.DEFAULT_UP=new L(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new L,un=new L,rr=new L,dn=new L,si=new L,ri=new L,so=new L,ar=new L,or=new L,lr=new L,cr=new dt,hr=new dt,ur=new dt;class Ht{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),un.subVectors(n,t),rr.subVectors(e,t);const a=$t.dot($t),o=$t.dot(un),l=$t.dot(rr),c=un.dot(un),u=un.dot(rr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return cr.setScalar(0),hr.setScalar(0),ur.setScalar(0),cr.fromBufferAttribute(e,t),hr.fromBufferAttribute(e,n),ur.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cr,r.x),a.addScaledVector(hr,r.y),a.addScaledVector(ur,r.z),a}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),un.subVectors(e,t),$t.cross(un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),un.subVectors(this.a,this.b),$t.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;si.subVectors(s,n),ri.subVectors(r,n),ar.subVectors(e,n);const l=si.dot(ar),c=ri.dot(ar);if(l<=0&&c<=0)return t.copy(n);or.subVectors(e,s);const u=si.dot(or),d=ri.dot(or);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(si,a);lr.subVectors(e,r);const m=si.dot(lr),g=ri.dot(lr);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ri,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return so.subVectors(r,s),o=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(so,o);const h=1/(p+v+f);return a=v*h,o=f*h,t.copy(n).addScaledVector(si,a).addScaledVector(ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},is={h:0,s:0,l:0};function dr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Ac(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=dr(a,r,e+1/3),this.g=dr(a,r,e),this.b=dr(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=fl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ke.workingToColorSpace(Tt.copy(this),e),Math.round(Ve(Tt.r*255,0,255))*65536+Math.round(Ve(Tt.g*255,0,255))*256+Math.round(Ve(Tt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Ot){Ke.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(is);const n=$s(Tn.h,is.h,t),s=$s(Tn.s,is.s,t),r=$s(Tn.l,is.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new oe;oe.NAMES=fl;let Xc=0;class $n extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=gi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Rr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cr&&(n.blendSrc=this.blendSrc),this.blendDst!==Rr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hs extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new L,ss=new De;let qc=0;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fa,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fa&&(e.usage=this.usage),e}}class pl extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ml extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yc=0;const Vt=new ct,fr=new rt,ai=new L,Bt=new Xi,Ii=new Xi,vt=new L;class Ut extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cl(e)?ml:pl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Bt.min,Ii.min),Bt.expandByPoint(vt),vt.addVectors(Bt.max,Ii.max),Bt.expandByPoint(vt)):(Bt.expandByPoint(Ii.min),Bt.expandByPoint(Ii.max))}Bt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)vt.fromBufferAttribute(o,c),l&&(ai.fromBufferAttribute(e,c),vt.add(ai)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new L,l[I]=new L;const c=new L,u=new L,d=new L,f=new De,m=new De,g=new De,v=new L,p=new L;function h(I,S,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),d.sub(c),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),o[I].add(v),o[S].add(v),o[M].add(v),l[I].add(p),l[S].add(p),l[M].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,S=T.length;I<S;++I){const M=T[I],R=M.start,k=M.count;for(let B=R,W=R+k;B<W;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new L,y=new L,D=new L,C=new L;function w(I){D.fromBufferAttribute(s,I),C.copy(D);const S=o[I];E.copy(S),E.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(C,S);const R=y.dot(l[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,R)}for(let I=0,S=T.length;I<S;++I){const M=T[I],R=M.start,k=M.count;for(let B=R,W=R+k;B<W;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new Gt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ro=new ct,Nn=new ul,rs=new Vs,ao=new L,as=new L,os=new L,ls=new L,pr=new L,cs=new L,oo=new L,hs=new L;class de extends rt{constructor(e=new Ut,t=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(pr.fromBufferAttribute(d,e),a?cs.addScaledVector(pr,u):cs.addScaledVector(pr.sub(t),u))}t.add(cs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),Nn.copy(e.ray).recast(e.near),!(rs.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(rs,ao)===null||Nn.origin.distanceToSquared(ao)>(e.far-e.near)**2))&&(ro.copy(r).invert(),Nn.copy(e.ray).applyMatrix4(ro),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],h=a[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,D=E;y<D;y+=3){const C=o.getX(y),w=o.getX(y+1),I=o.getX(y+2);s=us(this,h,e,n,c,u,d,C,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const T=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);s=us(this,a,e,n,c,u,d,T,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],h=a[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,D=E;y<D;y+=3){const C=y,w=y+1,I=y+2;s=us(this,h,e,n,c,u,d,C,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const T=p,E=p+1,y=p+2;s=us(this,a,e,n,c,u,d,T,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function $c(i,e,t,n,s,r,a,o){let l;if(e.side===Rt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Pn,o),l===null)return null;hs.copy(o),hs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(hs);return c<t.near||c>t.far?null:{distance:c,point:hs.clone(),object:i}}function us(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,as),i.getVertexPosition(l,os),i.getVertexPosition(c,ls);const u=$c(i,e,t,n,as,os,ls,oo);if(u){const d=new L;Ht.getBarycoord(oo,as,os,ls,d),s&&(u.uv=Ht.getInterpolatedAttribute(s,o,l,c,d,new De)),r&&(u.uv1=Ht.getInterpolatedAttribute(r,o,l,c,d,new De)),a&&(u.normal=Ht.getInterpolatedAttribute(a,o,l,c,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};Ht.getNormal(as,os,ls,f.normal),u.face=f,u.barycoord=d}return u}class Ae extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(d,2));function g(v,p,h,T,E,y,D,C,w,I,S){const M=y/w,R=D/I,k=y/2,B=D/2,W=C/2,Y=w+1,G=I+1;let Z=0,V=0;const ie=new L;for(let ue=0;ue<G;ue++){const xe=ue*R-B;for(let Oe=0;Oe<Y;Oe++){const Ye=Oe*M-k;ie[v]=Ye*T,ie[p]=xe*E,ie[h]=W,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[p]=0,ie[h]=C>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(Oe/w),d.push(1-ue/I),Z+=1}}for(let ue=0;ue<I;ue++)for(let xe=0;xe<w;xe++){const Oe=f+xe+Y*ue,Ye=f+xe+Y*(ue+1),X=f+(xe+1)+Y*(ue+1),ee=f+(xe+1)+Y*ue;l.push(Oe,Ye,ee),l.push(Ye,X,ee),V+=6}o.addGroup(m,V,S),m+=V,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ae(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const s in n)e[s]=n[s]}return e}function Kc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Gi={clone:Ti,merge:Ct};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _l extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new L,lo=new De,co=new De;class St extends _l{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bn.x,bn.y).multiplyScalar(-e/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-e/bn.z)}getViewSize(e,t){return this.getViewBounds(e,lo,co),t.subVectors(co,lo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oi=-90,li=1;class Jc extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new St(oi,li,e,t);s.layers=this.layers,this.add(s);const r=new St(oi,li,e,t);r.layers=this.layers,this.add(r);const a=new St(oi,li,e,t);a.layers=this.layers,this.add(a);const o=new St(oi,li,e,t);o.layers=this.layers,this.add(o);const l=new St(oi,li,e,t);l.layers=this.layers,this.add(l);const c=new St(oi,li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vl extends Pt{constructor(e=[],t=yi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qc extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ae(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:_n});r.uniforms.tEquirect.value=t;const a=new de(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=sn),new Jc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class xt extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eh={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ba{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(e),this.density=t}clone(){return new ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class th extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fa,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new L;class Bs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class As extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ci;const Ui=new L,hi=new L,ui=new L,di=new De,Ni=new De,xl=new ct,ds=new L,Fi=new L,fs=new L,ho=new De,gr=new De,uo=new De;class _r extends rt{constructor(e=new As){if(super(),this.isSprite=!0,this.type="Sprite",ci===void 0){ci=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nh(t,5);ci.setIndex([0,1,2,0,2,3]),ci.setAttribute("position",new Bs(n,3,0,!1)),ci.setAttribute("uv",new Bs(n,2,3,!1))}this.geometry=ci,this.material=e,this.center=new De(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hi.setFromMatrixScale(this.matrixWorld),xl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ui.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hi.multiplyScalar(-ui.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ps(ds.set(-.5,-.5,0),ui,a,hi,s,r),ps(Fi.set(.5,-.5,0),ui,a,hi,s,r),ps(fs.set(.5,.5,0),ui,a,hi,s,r),ho.set(0,0),gr.set(1,0),uo.set(1,1);let o=e.ray.intersectTriangle(ds,Fi,fs,!1,Ui);if(o===null&&(ps(Fi.set(-.5,.5,0),ui,a,hi,s,r),gr.set(0,1),o=e.ray.intersectTriangle(ds,fs,Fi,!1,Ui),o===null))return;const l=e.ray.origin.distanceTo(Ui);l<e.near||l>e.far||t.push({distance:l,point:Ui.clone(),uv:Ht.getInterpolation(Ui,ds,Fi,fs,ho,gr,uo,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ps(i,e,t,n,s,r){di.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ni.x=r*di.x-s*di.y,Ni.y=s*di.x+r*di.y):Ni.copy(di),i.copy(e),i.x+=Ni.x,i.y+=Ni.y,i.applyMatrix4(xl)}const vr=new L,ih=new L,sh=new ze;class zn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=vr.subVectors(n,t).cross(ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sh.getNormalMatrix(e),s=this.coplanarPoint(vr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Vs,ms=new L;class wa{constructor(e=new zn,t=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],h=s[12],T=s[13],E=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,p-m,y-h).normalize(),n[1].setComponents(l+r,f+c,p+m,y+h).normalize(),n[2].setComponents(l+a,f+u,p+g,y+T).normalize(),n[3].setComponents(l-a,f-u,p-g,y-T).normalize(),n[4].setComponents(l-o,f-d,p-v,y-E).normalize(),t===gn)n[5].setComponents(l+o,f+d,p+v,y+E).normalize();else if(t===Us)n[5].setComponents(o,d,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ms.x=s.normal.x>0?e.max.x:e.min.x,ms.y=s.normal.y>0?e.max.y:e.min.y,ms.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ml extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fo=new ct,pa=new ul,gs=new Vs,_s=new L;class rh extends rt{constructor(e=new Ut,t=new Ml){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(s),gs.radius+=r,e.ray.intersectsSphere(gs)===!1)return;fo.copy(s).invert(),pa.copy(e.ray).applyMatrix4(fo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,v=m;g<v;g++){const p=c.getX(g);_s.fromBufferAttribute(d,p),po(_s,p,l,s,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,v=m;g<v;g++)_s.fromBufferAttribute(d,g),po(_s,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function po(i,e,t,n,s,r,a){const o=pa.distanceSqToPoint(i);if(o<t){const l=new L;pa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class yl extends Pt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sl extends Pt{constructor(e,t,n=qn,s,r,a,o=jt,l=jt,c,u=Vi,d=1){if(u!==Vi&&u!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ta(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yn extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],m=[];let g=0;const v=[],p=n/2;let h=0;T(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(m,2));function T(){const y=new L,D=new L;let C=0;const w=(t-e)/n;for(let I=0;I<=r;I++){const S=[],M=I/r,R=M*(t-e)+e;for(let k=0;k<=s;k++){const B=k/s,W=B*l+o,Y=Math.sin(W),G=Math.cos(W);D.x=R*Y,D.y=-M*n+p,D.z=R*G,d.push(D.x,D.y,D.z),y.set(Y,w,G).normalize(),f.push(y.x,y.y,y.z),m.push(B,1-M),S.push(g++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const M=v[S][I],R=v[S+1][I],k=v[S+1][I+1],B=v[S][I+1];(e>0||S!==0)&&(u.push(M,R,B),C+=3),(t>0||S!==r-1)&&(u.push(R,k,B),C+=3)}c.addGroup(h,C,0),h+=C}function E(y){const D=g,C=new De,w=new L;let I=0;const S=y===!0?e:t,M=y===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,p*M,0),f.push(0,M,0),m.push(.5,.5),g++;const R=g;for(let k=0;k<=s;k++){const W=k/s*l+o,Y=Math.cos(W),G=Math.sin(W);w.x=S*G,w.y=p*M,w.z=S*Y,d.push(w.x,w.y,w.z),f.push(0,M,0),C.x=Y*.5+.5,C.y=G*.5*M+.5,m.push(C.x,C.y),g++}for(let k=0;k<s;k++){const B=D+k,W=R+k;y===!0?u.push(W,W+1,B):u.push(W+1,W,B),I+=3}c.addGroup(h,I,y===!0?1:2),h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Os extends Yn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Os(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qi extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,m=[],g=[],v=[],p=[];for(let h=0;h<u;h++){const T=h*f-a;for(let E=0;E<c;E++){const y=E*d-r;g.push(y,-T,0),v.push(0,0,1),p.push(E/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const E=T+c*h,y=T+c*(h+1),D=T+1+c*(h+1),C=T+1+c*h;m.push(E,y,C),m.push(y,D,C)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Aa extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new L,f=new L,m=[],g=[],v=[],p=[];for(let h=0;h<=n;h++){const T=[],E=h/n;let y=0;h===0&&a===0?y=.5/t:h===n&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){const C=D/t;d.x=-e*Math.cos(s+C*r)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(s+C*r)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(C+y,1-E),T.push(c++)}u.push(T)}for(let h=0;h<n;h++)for(let T=0;T<t;T++){const E=u[h][T+1],y=u[h][T],D=u[h+1][T],C=u[h+1][T+1];(h!==0||a>0)&&m.push(E,y,C),(h!==n-1||l<Math.PI)&&m.push(y,D,C)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ca extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new L,d=new L,f=new L;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const v=g/s*r,p=m/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(v),d.y=(e+t*Math.cos(p))*Math.sin(v),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const v=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,h=(s+1)*(m-1)+g,T=(s+1)*m+g;a.push(v,p,T),a.push(p,h,T)}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class st extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mo extends st{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ah extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oh extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ra extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class lh extends Ra{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xr=new ct,go=new L,_o=new L;class El{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;go.setFromMatrixPosition(e.matrixWorld),t.position.copy(go),_o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_o),t.updateMatrixWorld(),xr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ch extends El{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hh extends Ra{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pa extends _l{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uh extends El{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dh extends Ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fh extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ph{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vo(){return performance.now()}function xo(i,e,t,n){const s=mh(n);switch(t){case nl:return i*e;case sl:return i*e/s.components*s.byteLength;case ya:return i*e/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case Sa:return i*e*2/s.components*s.byteLength;case il:return i*e*3/s.components*s.byteLength;case Zt:return i*e*4/s.components*s.byteLength;case Ea:return i*e*4/s.components*s.byteLength;case Ss:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ts:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hr:case Wr:return Math.max(i,16)*Math.max(e,8)/4;case Vr:case Gr:return Math.max(i,8)*Math.max(e,8)/2;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ws:case la:case ca:return Math.ceil(i/4)*Math.ceil(e/4)*16;case al:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ua:case da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mh(i){switch(i){case rn:case Qo:return{byteLength:1,components:1};case zi:case el:case vn:return{byteLength:2,components:1};case xa:case Ma:return{byteLength:2,components:4};case qn:case va:case mn:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);function Tl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function gh(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ku=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ku=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,td=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,id=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ud=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ed=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Td=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Id=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:_h,alphahash_pars_fragment:vh,alphamap_fragment:xh,alphamap_pars_fragment:Mh,alphatest_fragment:yh,alphatest_pars_fragment:Sh,aomap_fragment:Eh,aomap_pars_fragment:Th,batching_pars_vertex:bh,batching_vertex:wh,begin_vertex:Ah,beginnormal_vertex:Ch,bsdfs:Rh,iridescence_fragment:Ph,bumpmap_pars_fragment:Dh,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Ih,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Nh,color_fragment:Fh,color_pars_fragment:Bh,color_pars_vertex:Oh,color_vertex:zh,common:kh,cube_uv_reflection_fragment:Vh,defaultnormal_vertex:Hh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Wh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:$h,envmap_fragment:Kh,envmap_common_pars_fragment:Zh,envmap_pars_fragment:jh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:cu,envmap_vertex:Qh,fog_vertex:eu,fog_pars_vertex:tu,fog_fragment:nu,fog_pars_fragment:iu,gradientmap_pars_fragment:su,lightmap_pars_fragment:ru,lights_lambert_fragment:au,lights_lambert_pars_fragment:ou,lights_pars_begin:lu,lights_toon_fragment:hu,lights_toon_pars_fragment:uu,lights_phong_fragment:du,lights_phong_pars_fragment:fu,lights_physical_fragment:pu,lights_physical_pars_fragment:mu,lights_fragment_begin:gu,lights_fragment_maps:_u,lights_fragment_end:vu,logdepthbuf_fragment:xu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:yu,logdepthbuf_vertex:Su,map_fragment:Eu,map_pars_fragment:Tu,map_particle_fragment:bu,map_particle_pars_fragment:wu,metalnessmap_fragment:Au,metalnessmap_pars_fragment:Cu,morphinstance_vertex:Ru,morphcolor_vertex:Pu,morphnormal_vertex:Du,morphtarget_pars_vertex:Lu,morphtarget_vertex:Iu,normal_fragment_begin:Uu,normal_fragment_maps:Nu,normal_pars_fragment:Fu,normal_pars_vertex:Bu,normal_vertex:Ou,normalmap_pars_fragment:zu,clearcoat_normal_fragment_begin:ku,clearcoat_normal_fragment_maps:Vu,clearcoat_pars_fragment:Hu,iridescence_pars_fragment:Gu,opaque_fragment:Wu,packing:Xu,premultiplied_alpha_fragment:qu,project_vertex:Yu,dithering_fragment:$u,dithering_pars_fragment:Ku,roughnessmap_fragment:Zu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Ju,shadowmap_pars_vertex:Qu,shadowmap_vertex:ed,shadowmask_pars_fragment:td,skinbase_vertex:nd,skinning_pars_vertex:id,skinning_vertex:sd,skinnormal_vertex:rd,specularmap_fragment:ad,specularmap_pars_fragment:od,tonemapping_fragment:ld,tonemapping_pars_fragment:cd,transmission_fragment:hd,transmission_pars_fragment:ud,uv_pars_fragment:dd,uv_pars_vertex:fd,uv_vertex:pd,worldpos_vertex:md,background_vert:gd,background_frag:_d,backgroundCube_vert:vd,backgroundCube_frag:xd,cube_vert:Md,cube_frag:yd,depth_vert:Sd,depth_frag:Ed,distanceRGBA_vert:Td,distanceRGBA_frag:bd,equirect_vert:wd,equirect_frag:Ad,linedashed_vert:Cd,linedashed_frag:Rd,meshbasic_vert:Pd,meshbasic_frag:Dd,meshlambert_vert:Ld,meshlambert_frag:Id,meshmatcap_vert:Ud,meshmatcap_frag:Nd,meshnormal_vert:Fd,meshnormal_frag:Bd,meshphong_vert:Od,meshphong_frag:zd,meshphysical_vert:kd,meshphysical_frag:Vd,meshtoon_vert:Hd,meshtoon_frag:Gd,points_vert:Wd,points_frag:Xd,shadow_vert:qd,shadow_frag:Yd,sprite_vert:$d,sprite_frag:Kd},re={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},tn={basic:{uniforms:Ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new oe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ct([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ct([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new oe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ct([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ct([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ct([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ct([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ct([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ct([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ct([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ct([re.lights,re.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};tn.physical={uniforms:Ct([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const vs={r:0,b:0,g:0},Bn=new an,Zd=new ct;function jd(i,e,t,n,s,r,a){const o=new oe(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function v(E){let y=!1;const D=g(E);D===null?h(o,l):D&&D.isColor&&(h(D,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,y){const D=g(y);D&&(D.isCubeTexture||D.mapping===ks)?(u===void 0&&(u=new de(new Ae(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Ti(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bn.copy(y.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(Bn)),u.material.toneMapped=Ke.getTransfer(D.colorSpace)!==nt,(d!==D||f!==D.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=D,f=D.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new de(new qi(2,2),new bt({name:"BackgroundMaterial",uniforms:Ti(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(D.colorSpace)!==nt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||f!==D.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=D,f=D.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,y){E.getRGB(vs,gl(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,y,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(o,l)},render:v,addToRenderList:p,dispose:T}}function Jd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,R,k,B,W){let Y=!1;const G=d(B,k,R);r!==G&&(r=G,c(r.object)),Y=m(M,B,k,W),Y&&g(M,B,k,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(M,R,k,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,R,k){const B=k.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let Y=W[R.id];Y===void 0&&(Y={},W[R.id]=Y);let G=Y[B];return G===void 0&&(G=f(l()),Y[B]=G),G}function f(M){const R=[],k=[],B=[];for(let W=0;W<t;W++)R[W]=0,k[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:B,object:M,attributes:{},index:null}}function m(M,R,k,B){const W=r.attributes,Y=R.attributes;let G=0;const Z=k.getAttributes();for(const V in Z)if(Z[V].location>=0){const ue=W[V];let xe=Y[V];if(xe===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(M,R,k,B){const W={},Y=R.attributes;let G=0;const Z=k.getAttributes();for(const V in Z)if(Z[V].location>=0){let ue=Y[V];ue===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),W[V]=xe,G++}r.attributes=W,r.attributesNum=G,r.index=B}function v(){const M=r.newAttributes;for(let R=0,k=M.length;R<k;R++)M[R]=0}function p(M){h(M,0)}function h(M,R){const k=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;k[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),W[M]!==R&&(i.vertexAttribDivisor(M,R),W[M]=R)}function T(){const M=r.newAttributes,R=r.enabledAttributes;for(let k=0,B=R.length;k<B;k++)R[k]!==M[k]&&(i.disableVertexAttribArray(k),R[k]=0)}function E(M,R,k,B,W,Y,G){G===!0?i.vertexAttribIPointer(M,R,k,W,Y):i.vertexAttribPointer(M,R,k,B,W,Y)}function y(M,R,k,B){v();const W=B.attributes,Y=k.getAttributes(),G=R.defaultAttributeValues;for(const Z in Y){const V=Y[Z];if(V.location>=0){let ie=W[Z];if(ie===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const ue=ie.normalized,xe=ie.itemSize,Oe=e.get(ie);if(Oe===void 0)continue;const Ye=Oe.buffer,X=Oe.type,ee=Oe.bytesPerElement,Me=X===i.INT||X===i.UNSIGNED_INT||ie.gpuType===va;if(ie.isInterleavedBufferAttribute){const le=ie.data,Se=le.stride,qe=ie.offset;if(le.isInstancedInterleavedBuffer){for(let Ce=0;Ce<V.locationSize;Ce++)h(V.location+Ce,le.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<V.locationSize;Ce++)p(V.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Ce=0;Ce<V.locationSize;Ce++)E(V.location+Ce,xe/V.locationSize,X,ue,Se*ee,(qe+xe/V.locationSize*Ce)*ee,Me)}else{if(ie.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)h(V.location+le,ie.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let le=0;le<V.locationSize;le++)p(V.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let le=0;le<V.locationSize;le++)E(V.location+le,xe/V.locationSize,X,ue,xe*ee,xe/V.locationSize*le*ee,Me)}}else if(G!==void 0){const ue=G[Z];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(V.location,ue);break;case 3:i.vertexAttrib3fv(V.location,ue);break;case 4:i.vertexAttrib4fv(V.location,ue);break;default:i.vertexAttrib1fv(V.location,ue)}}}}T()}function D(){I();for(const M in n){const R=n[M];for(const k in R){const B=R[k];for(const W in B)u(B[W].object),delete B[W];delete R[k]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const k in R){const B=R[k];for(const W in B)u(B[W].object),delete B[W];delete R[k]}delete n[M.id]}function w(M){for(const R in n){const k=n[R];if(k[M.id]===void 0)continue;const B=k[M.id];for(const W in B)u(B[W].object),delete B[W];delete k[M.id]}}function I(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:T}}function Qd(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ef(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Zt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const I=w===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==mn&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:D,maxSamples:C}}function tf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new zn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const T=r?0:n,E=T*4;let y=h.clippingState||null;l.value=y,y=u(g,f,E,m);for(let D=0;D!==E;++D)y[D]=t[D];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const h=m+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,y=m;E!==v;++E,y+=4)a.copy(d[E]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function nf(i){let e=new WeakMap;function t(a,o){return o===Br?a.mapping=yi:o===Or&&(a.mapping=Si),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Br||o===Or)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const mi=4,Mo=[.125,.215,.35,.446,.526,.582],Hn=20,Mr=new Pa,yo=new oe;let yr=null,Sr=0,Er=0,Tr=!1;const kn=(1+Math.sqrt(5))/2,fi=1/kn,So=[new L(-kn,fi,0),new L(kn,fi,0),new L(-fi,0,kn),new L(fi,0,kn),new L(0,kn,-fi),new L(0,kn,fi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],sf=new L;class Eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=sf}=r;yr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),Er=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yr,Sr,Er),this._renderer.xr.enabled=Tr,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),Er=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:vn,format:Zt,colorSpace:Ei,depthBuffer:!1},s=To(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=To(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rf(r)),this._blurMaterial=af(r,e,t)}return s}_compileMaterial(e){const t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,n,s,r){const l=new St(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(yo),d.toneMapping=Cn,d.autoClear=!1;const g=new Hs({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),v=new de(new Ae,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(yo),p=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const y=this._cubeSize;xs(s,E*y,T>2?y:0,y,y),d.setRenderTarget(s),p&&d.render(v,l),d.render(e,l)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===yi||e.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Mr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=So[(s-r-1)%So.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new de(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Hn-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):Hn;p>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hn}`);const h=[];let T=0;for(let w=0;w<Hn;++w){const I=w/v,S=Math.exp(-I*I/2);h.push(S),w===0?T+=S:w<p&&(T+=2*S)}for(let w=0;w<h.length;w++)h[w]=h[w]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const y=this._sizeLods[s],D=3*y*(s>E-mi?s-E+mi:0),C=4*(this._cubeSize-y);xs(t,D,C,3*y,2*y),l.setRenderTarget(t),l.render(d,Mr)}}function rf(i){const e=[],t=[],n=[];let s=i;const r=i-mi+1+Mo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-mi?l=Mo[a-i+mi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,p=2,h=1,T=new Float32Array(v*g*m),E=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,I=C>2?0:-1,S=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];T.set(S,v*g*C),E.set(f,p*g*C);const M=[C,C,C,C,C,C];y.set(M,h*g*C)}const D=new Ut;D.setAttribute("position",new Gt(T,v)),D.setAttribute("uv",new Gt(E,p)),D.setAttribute("faceIndex",new Gt(y,h)),e.push(D),s>mi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function To(i,e,t){const n=new Jt(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function af(i,e,t){const n=new Float32Array(Hn),s=new L(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function bo(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function wo(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function of(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Br||l===Or,u=l===yi||l===Si;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Eo(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Eo(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function lf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&_i("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cf(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let E=0,y=T.length;E<y;E+=3){const D=T[E+0],C=T[E+1],w=T[E+2];f.push(D,C,C,w,w,D)}}else if(g!==void 0){const T=g.array;v=g.version;for(let E=0,y=T.length/3-1;E<y;E+=3){const D=E+0,C=E+1,w=E+2;f.push(D,C,C,w,w,D)}}else return;const p=new(cl(f)?ml:pl)(f,1);p.version=v;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function hf(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,n,1)}function d(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/a,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,g);let h=0;for(let T=0;T<g;T++)h+=m[T]*v[T];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function uf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function df(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let D=o.attributes.position.count*y,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const w=new Float32Array(D*C*4*d),I=new hl(w,D,C,d);I.type=mn,I.needsUpdate=!0;const S=y*4;for(let R=0;R<d;R++){const k=h[R],B=T[R],W=E[R],Y=D*C*4*R;for(let G=0;G<k.count;G++){const Z=G*S;g===!0&&(s.fromBufferAttribute(k,G),w[Y+Z+0]=s.x,w[Y+Z+1]=s.y,w[Y+Z+2]=s.z,w[Y+Z+3]=0),v===!0&&(s.fromBufferAttribute(B,G),w[Y+Z+4]=s.x,w[Y+Z+5]=s.y,w[Y+Z+6]=s.z,w[Y+Z+7]=0),p===!0&&(s.fromBufferAttribute(W,G),w[Y+Z+8]=s.x,w[Y+Z+9]=s.y,w[Y+Z+10]=s.z,w[Y+Z+11]=W.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new De(D,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ff(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const bl=new Pt,Ao=new Sl(1,1),wl=new hl,Al=new Bc,Cl=new vl,Co=[],Ro=[],Po=new Float32Array(16),Do=new Float32Array(9),Lo=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Co[s];if(r===void 0&&(r=new Float32Array(s),Co[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gs(i,e){let t=Ro[e];t===void 0&&(t=new Int32Array(e),Ro[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function vf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Lo.set(n),i.uniformMatrix2fv(this.addr,!1,Lo),_t(t,n)}}function xf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Do.set(n),i.uniformMatrix3fv(this.addr,!1,Do),_t(t,n)}}function Mf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Po.set(n),i.uniformMatrix4fv(this.addr,!1,Po),_t(t,n)}}function yf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function bf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Rf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ao.compareFunction=ll,r=Ao):r=bl,t.setTexture2D(e||r,s)}function Pf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Al,s)}function Df(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cl,s)}function Lf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wl,s)}function If(i){switch(i){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return vf;case 35675:return xf;case 35676:return Mf;case 5124:case 35670:return yf;case 35667:case 35671:return Sf;case 35668:case 35672:return Ef;case 35669:case 35673:return Tf;case 5125:return bf;case 36294:return wf;case 36295:return Af;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return Lf}}function Uf(i,e){i.uniform1fv(this.addr,e)}function Nf(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function Ff(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function Bf(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function Of(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zf(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kf(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vf(i,e){i.uniform1iv(this.addr,e)}function Hf(i,e){i.uniform2iv(this.addr,e)}function Gf(i,e){i.uniform3iv(this.addr,e)}function Wf(i,e){i.uniform4iv(this.addr,e)}function Xf(i,e){i.uniform1uiv(this.addr,e)}function qf(i,e){i.uniform2uiv(this.addr,e)}function Yf(i,e){i.uniform3uiv(this.addr,e)}function $f(i,e){i.uniform4uiv(this.addr,e)}function Kf(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||bl,r[a])}function Zf(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Al,r[a])}function jf(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Cl,r[a])}function Jf(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wl,r[a])}function Qf(i){switch(i){case 5126:return Uf;case 35664:return Nf;case 35665:return Ff;case 35666:return Bf;case 35674:return Of;case 35675:return zf;case 35676:return kf;case 5124:case 35670:return Vf;case 35667:case 35671:return Hf;case 35668:case 35672:return Gf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Jf}}class ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=If(t.type)}}class tp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qf(t.type)}}class np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const br=/(\w+)(\])?(\[|\.)?/g;function Io(i,e){i.seq.push(e),i.map[e.id]=e}function ip(i,e,t){const n=i.name,s=n.length;for(br.lastIndex=0;;){const r=br.exec(n),a=br.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Io(t,c===void 0?new ep(o,i,e):new tp(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new np(o),Io(t,d)),t=d}}}class Cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ip(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Uo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const sp=37297;let rp=0;function ap(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const No=new ze;function op(i){Ke._getMatrix(No,Ke.workingColorSpace,i);const e=`mat3( ${No.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Is:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ap(i.getShaderSource(e),a)}else return s}function lp(i,e){const t=op(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cp(i,e){let t;switch(e){case hc:t="Linear";break;case uc:t="Reinhard";break;case dc:t="Cineon";break;case jo:t="ACESFilmic";break;case pc:t="AgX";break;case mc:t="Neutral";break;case fc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new L;function hp(){Ke.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function up(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function dp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Bi(i){return i!==""}function Bo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(i){return i.replace(pp,gp)}const mp=new Map;function gp(i,e){let t=ke[e];if(t===void 0){const n=mp.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ma(t)}const _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zo(i){return i.replace(_p,vp)}function vp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ko(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ko?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Mp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yi:case Si:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yp(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Si&&(e="ENVMAP_MODE_REFRACTION"),e}function Sp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case lc:e="ENVMAP_BLENDING_MIX";break;case cc:e="ENVMAP_BLENDING_ADD";break}return e}function Ep(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Tp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xp(t),c=Mp(t),u=yp(t),d=Sp(t),f=Ep(t),m=up(t),g=dp(r),v=s.createProgram();let p,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bi).join(`
`),h.length>0&&(h+=`
`)):(p=[ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),h=[ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Cn?cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,lp("linearToOutputTexel",t.outputColorSpace),hp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),a=ma(a),a=Bo(a,t),a=Oo(a,t),o=ma(o),o=Bo(o,t),o=Oo(o,t),a=zo(a),o=zo(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=T+p+a,y=T+h+o,D=Uo(s,s.VERTEX_SHADER,E),C=Uo(s,s.FRAGMENT_SHADER,y);s.attachShader(v,D),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(R){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(C).trim();let Y=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,C);else{const Z=Fo(s,D,"vertex"),V=Fo(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+Z+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||W==="")&&(G=!1);G&&(R.diagnostics={runnable:Y,programLog:k,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:h}})}s.deleteShader(D),s.deleteShader(C),I=new Cs(s,v),S=fp(s,v)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,sp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=C,this}let bp=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ap(e),t.set(e,n)),n}}class Ap{constructor(e){this.id=bp++,this.code=e,this.usedTimes=0}}function Cp(i,e,t,n,s,r,a){const o=new dl,l=new wp,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,R,k,B){const W=k.fog,Y=B.geometry,G=S.isMeshStandardMaterial?k.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),V=Z&&Z.mapping===ks?Z.image.height:null,ie=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xe=ue!==void 0?ue.length:0;let Oe=0;Y.morphAttributes.position!==void 0&&(Oe=1),Y.morphAttributes.normal!==void 0&&(Oe=2),Y.morphAttributes.color!==void 0&&(Oe=3);let Ye,X,ee,Me;if(ie){const Qe=tn[ie];Ye=Qe.vertexShader,X=Qe.fragmentShader}else Ye=S.vertexShader,X=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),Me=l.getFragmentShaderID(S);const le=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),qe=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,at=!!S.map,tt=!!S.matcap,He=!!Z,A=!!S.aoMap,mt=!!S.lightMap,Ge=!!S.bumpMap,Ze=!!S.normalMap,ye=!!S.displacementMap,Xe=!!S.emissiveMap,we=!!S.metalnessMap,Be=!!S.roughnessMap,ft=S.anisotropy>0,b=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,q=S.sheen>0,K=S.transmission>0,H=ft&&!!S.anisotropyMap,Ee=b&&!!S.clearcoatMap,ae=b&&!!S.clearcoatNormalMap,ve=b&&!!S.clearcoatRoughnessMap,Te=F&&!!S.iridescenceMap,j=F&&!!S.iridescenceThicknessMap,fe=q&&!!S.sheenColorMap,Le=q&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,se=!!S.specularColorMap,Ne=!!S.specularIntensityMap,P=K&&!!S.transmissionMap,ce=K&&!!S.thicknessMap,J=!!S.gradientMap,me=!!S.alphaMap,Q=S.alphaTest>0,$=!!S.alphaHash,ge=!!S.extensions;let Fe=Cn;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const ot={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:X,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&B._colorsTexture!==null,instancing:qe,instancingColor:qe&&B.instanceColor!==null,instancingMorph:qe&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ei,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:tt,envMap:He,envMapMode:He&&Z.mapping,envMapCubeUVHeight:V,aoMap:A,lightMap:mt,bumpMap:Ge,normalMap:Ze,displacementMap:f&&ye,emissiveMap:Xe,normalMapObjectSpace:Ze&&S.normalMapType===xc,normalMapTangentSpace:Ze&&S.normalMapType===ol,metalnessMap:we,roughnessMap:Be,anisotropy:ft,anisotropyMap:H,clearcoat:b,clearcoatMap:Ee,clearcoatNormalMap:ae,clearcoatRoughnessMap:ve,dispersion:_,iridescence:F,iridescenceMap:Te,iridescenceThicknessMap:j,sheen:q,sheenColorMap:fe,sheenRoughnessMap:Le,specularMap:Pe,specularColorMap:se,specularIntensityMap:Ne,transmission:K,transmissionMap:P,thicknessMap:ce,gradientMap:J,opaque:S.transparent===!1&&S.blending===gi&&S.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:$,combine:S.combine,mapUv:at&&v(S.map.channel),aoMapUv:A&&v(S.aoMap.channel),lightMapUv:mt&&v(S.lightMap.channel),bumpMapUv:Ge&&v(S.bumpMap.channel),normalMapUv:Ze&&v(S.normalMap.channel),displacementMapUv:ye&&v(S.displacementMap.channel),emissiveMapUv:Xe&&v(S.emissiveMap.channel),metalnessMapUv:we&&v(S.metalnessMap.channel),roughnessMapUv:Be&&v(S.roughnessMap.channel),anisotropyMapUv:H&&v(S.anisotropyMap.channel),clearcoatMapUv:Ee&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(S.sheenRoughnessMap.channel),specularMapUv:Pe&&v(S.specularMap.channel),specularColorMapUv:se&&v(S.specularColorMap.channel),specularIntensityMapUv:Ne&&v(S.specularIntensityMap.channel),transmissionMapUv:P&&v(S.transmissionMap.channel),thicknessMapUv:ce&&v(S.thicknessMap.channel),alphaMapUv:me&&v(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ze||ft),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(at||me),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Se,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===nt,decodeVideoTextureEmissive:Xe&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===Rt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ge&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(T(M,S),E(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=g[S.type];let R;if(M){const k=tn[M];R=Gi.clone(k.uniforms)}else R=S.uniforms;return R}function D(S,M){let R;for(let k=0,B=u.length;k<B;k++){const W=u[k];if(W.cacheKey===M){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Tp(i,M,S,r),u.push(R)),R}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:D,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:I}}function Rp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Pp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ho(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,m,g,v,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=p),e++,h}function o(d,f,m,g,v,p){const h=a(d,f,m,g,v,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,f,m,g,v,p){const h=a(d,f,m,g,v,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||Pp),n.length>1&&n.sort(f||Vo),s.length>1&&s.sort(f||Vo)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Dp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ho,i.set(n,[a])):s>=r.length?(a=new Ho,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new oe};break;case"SpotLight":t={position:new L,direction:new L,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ip(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Up=0;function Np(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fp(i){const e=new Lp,t=Ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ct,a=new ct;function o(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,v=0,p=0,h=0,T=0,E=0,y=0,D=0,C=0,w=0;c.sort(Np);for(let S=0,M=c.length;S<M;S++){const R=c[S],k=R.color,B=R.intensity,W=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=k.r*B,d+=k.g*B,f+=k.b*B;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],B);w++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,V=t.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=R.shadow.matrix,T++}n.directional[m]=G,m++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(k).multiplyScalar(B),G.distance=W,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[v]=G;const Z=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,Z.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[v]=Z.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=Y,y++}v++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(k).multiplyScalar(B),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=G,p++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Z=R.shadow,V=t.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(B),G.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[h]=G,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==h||I.numDirectionalShadows!==T||I.numPointShadows!==E||I.numSpotShadows!==y||I.numSpotMaps!==D||I.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=h,I.numDirectionalShadows=T,I.numPointShadows=E,I.numSpotShadows=y,I.numSpotMaps=D,I.numLightProbes=w,n.version=Up++)}function l(c,u){let d=0,f=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const E=c[h];if(E.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(E.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Go(i){const e=new Fp(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Bp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Go(i),e.set(s,[o])):r>=a.length?(o=new Go(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kp(i,e,t){let n=new wa;const s=new De,r=new De,a=new dt,o=new ah({depthPacking:vc}),l=new oh,c={},u=t.maxTextureSize,d={[Pn]:Rt,[Rt]:Pn,[pn]:pn},f=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Op,fragmentShader:zp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new de(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o;let h=this.type;this.render=function(C,w,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),k=i.state;k.setBlending(_n),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=h!==fn&&this.type===fn,W=h===fn&&this.type!==fn;for(let Y=0,G=C.length;Y<G;Y++){const Z=C[Y],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ie=V.getFrameExtents();if(s.multiply(ie),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y)),V.map===null||B===!0||W===!0){const xe=this.type!==fn?{minFilter:jt,magFilter:jt}:{};V.map!==null&&V.map.dispose(),V.map=new Jt(s.x,s.y,xe),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ue=V.getViewportCount();for(let xe=0;xe<ue;xe++){const Oe=V.getViewport(xe);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),k.viewport(a),V.updateMatrices(Z,xe),n=V.getFrustum(),y(w,I,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===fn&&T(V,I),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(S,M,R)};function T(C,w){const I=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Jt(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,I,f,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,I,m,v,null)}function E(C,w,I,S){let M=null;const R=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=M.uuid,B=w.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let Y=W[B];Y===void 0&&(Y=M.clone(),W[B]=Y,w.addEventListener("dispose",D)),M=Y}if(M.visible=w.visible,M.wireframe=w.wireframe,S===fn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=I}return M}function y(C,w,I,S,M){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===fn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const B=e.update(C),W=C.material;if(Array.isArray(W)){const Y=B.groups;for(let G=0,Z=Y.length;G<Z;G++){const V=Y[G],ie=W[V.materialIndex];if(ie&&ie.visible){const ue=E(C,ie,S,M);C.onBeforeShadow(i,C,w,I,B,ue,V),i.renderBufferDirect(I,null,B,ue,C,V),C.onAfterShadow(i,C,w,I,B,ue,V)}}}else if(W.visible){const Y=E(C,W,S,M);C.onBeforeShadow(i,C,w,I,B,Y,null),i.renderBufferDirect(I,null,B,Y,C,null),C.onAfterShadow(i,C,w,I,B,Y,null)}}const k=C.children;for(let B=0,W=k.length;B<W;B++)y(k[B],w,I,S,M)}function D(C){C.target.removeEventListener("dispose",D);for(const I in c){const S=c[I],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Vp={[Pr]:Dr,[Lr]:Nr,[Ir]:Fr,[Mi]:Ur,[Dr]:Pr,[Nr]:Lr,[Fr]:Ir,[Ur]:Mi};function Hp(i,e){function t(){let P=!1;const ce=new dt;let J=null;const me=new dt(0,0,0,0);return{setMask:function(Q){J!==Q&&!P&&(i.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){P=Q},setClear:function(Q,$,ge,Fe,ot){ot===!0&&(Q*=Fe,$*=Fe,ge*=Fe),ce.set(Q,$,ge,Fe),me.equals(ce)===!1&&(i.clearColor(Q,$,ge,Fe),me.copy(ce))},reset:function(){P=!1,J=null,me.set(-1,0,0,0)}}}function n(){let P=!1,ce=!1,J=null,me=null,Q=null;return{setReversed:function($){if(ce!==$){const ge=e.get("EXT_clip_control");$?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ce=$;const Fe=Q;Q=null,this.setClear(Fe)}},getReversed:function(){return ce},setTest:function($){$?le(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function($){J!==$&&!P&&(i.depthMask($),J=$)},setFunc:function($){if(ce&&($=Vp[$]),me!==$){switch($){case Pr:i.depthFunc(i.NEVER);break;case Dr:i.depthFunc(i.ALWAYS);break;case Lr:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Ir:i.depthFunc(i.EQUAL);break;case Ur:i.depthFunc(i.GEQUAL);break;case Nr:i.depthFunc(i.GREATER);break;case Fr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=$}},setLocked:function($){P=$},setClear:function($){Q!==$&&(ce&&($=1-$),i.clearDepth($),Q=$)},reset:function(){P=!1,J=null,me=null,Q=null,ce=!1}}}function s(){let P=!1,ce=null,J=null,me=null,Q=null,$=null,ge=null,Fe=null,ot=null;return{setTest:function(Qe){P||(Qe?le(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!P&&(i.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,Wt,on){(J!==Qe||me!==Wt||Q!==on)&&(i.stencilFunc(Qe,Wt,on),J=Qe,me=Wt,Q=on)},setOp:function(Qe,Wt,on){($!==Qe||ge!==Wt||Fe!==on)&&(i.stencilOp(Qe,Wt,on),$=Qe,ge=Wt,Fe=on)},setLocked:function(Qe){P=Qe},setClear:function(Qe){ot!==Qe&&(i.clearStencil(Qe),ot=Qe)},reset:function(){P=!1,ce=null,J=null,me=null,Q=null,$=null,ge=null,Fe=null,ot=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,h=null,T=null,E=null,y=null,D=null,C=null,w=new oe(0,0,0),I=0,S=!1,M=null,R=null,k=null,B=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Z>=2);let ie=null,ue={};const xe=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Ye=new dt().fromArray(xe),X=new dt().fromArray(Oe);function ee(P,ce,J,me){const Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(P,$),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<J;ge++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ce+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}const Me={};Me[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(Mi),Ge(!1),Ze(Ha),le(i.CULL_FACE),A(_n);function le(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Se(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function qe(P,ce){return d[P]!==ce?(i.bindFramebuffer(P,ce),d[P]=ce,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ce(P,ce){let J=m,me=!1;if(P){J=f.get(ce),J===void 0&&(J=[],f.set(ce,J));const Q=P.textures;if(J.length!==Q.length||J[0]!==i.COLOR_ATTACHMENT0){for(let $=0,ge=Q.length;$<ge;$++)J[$]=i.COLOR_ATTACHMENT0+$;J.length=Q.length,me=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,me=!0);me&&i.drawBuffers(J)}function at(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const tt={[Vn]:i.FUNC_ADD,[Xl]:i.FUNC_SUBTRACT,[ql]:i.FUNC_REVERSE_SUBTRACT};tt[Yl]=i.MIN,tt[$l]=i.MAX;const He={[Kl]:i.ZERO,[Zl]:i.ONE,[jl]:i.SRC_COLOR,[Cr]:i.SRC_ALPHA,[ic]:i.SRC_ALPHA_SATURATE,[tc]:i.DST_COLOR,[Ql]:i.DST_ALPHA,[Jl]:i.ONE_MINUS_SRC_COLOR,[Rr]:i.ONE_MINUS_SRC_ALPHA,[nc]:i.ONE_MINUS_DST_COLOR,[ec]:i.ONE_MINUS_DST_ALPHA,[sc]:i.CONSTANT_COLOR,[rc]:i.ONE_MINUS_CONSTANT_COLOR,[ac]:i.CONSTANT_ALPHA,[oc]:i.ONE_MINUS_CONSTANT_ALPHA};function A(P,ce,J,me,Q,$,ge,Fe,ot,Qe){if(P===_n){v===!0&&(Se(i.BLEND),v=!1);return}if(v===!1&&(le(i.BLEND),v=!0),P!==Wl){if(P!==p||Qe!==S){if((h!==Vn||y!==Vn)&&(i.blendEquation(i.FUNC_ADD),h=Vn,y=Vn),Qe)switch(P){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ls:i.blendFunc(i.ONE,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ls:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,E=null,D=null,C=null,w.set(0,0,0),I=0,p=P,S=Qe}return}Q=Q||ce,$=$||J,ge=ge||me,(ce!==h||Q!==y)&&(i.blendEquationSeparate(tt[ce],tt[Q]),h=ce,y=Q),(J!==T||me!==E||$!==D||ge!==C)&&(i.blendFuncSeparate(He[J],He[me],He[$],He[ge]),T=J,E=me,D=$,C=ge),(Fe.equals(w)===!1||ot!==I)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ot),w.copy(Fe),I=ot),p=P,S=!1}function mt(P,ce){P.side===pn?Se(i.CULL_FACE):le(i.CULL_FACE);let J=P.side===Rt;ce&&(J=!J),Ge(J),P.blending===gi&&P.transparent===!1?A(_n):A(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const me=P.stencilWrite;o.setTest(me),me&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Xe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function Ze(P){P!==Hl?(le(i.CULL_FACE),P!==R&&(P===Ha?i.cullFace(i.BACK):P===Gl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),R=P}function ye(P){P!==k&&(G&&i.lineWidth(P),k=P)}function Xe(P,ce,J){P?(le(i.POLYGON_OFFSET_FILL),(B!==ce||W!==J)&&(i.polygonOffset(ce,J),B=ce,W=J)):Se(i.POLYGON_OFFSET_FILL)}function we(P){P?le(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Be(P){P===void 0&&(P=i.TEXTURE0+Y-1),ie!==P&&(i.activeTexture(P),ie=P)}function ft(P,ce,J){J===void 0&&(ie===null?J=i.TEXTURE0+Y-1:J=ie);let me=ue[J];me===void 0&&(me={type:void 0,texture:void 0},ue[J]=me),(me.type!==P||me.texture!==ce)&&(ie!==J&&(i.activeTexture(J),ie=J),i.bindTexture(P,ce||Me[P]),me.type=P,me.texture=ce)}function b(){const P=ue[ie];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(P){Ye.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ye.copy(P))}function Le(P){X.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function Pe(P,ce){let J=c.get(ce);J===void 0&&(J=new WeakMap,c.set(ce,J));let me=J.get(P);me===void 0&&(me=i.getUniformBlockIndex(ce,P.name),J.set(P,me))}function se(P,ce){const me=c.get(ce).get(P);l.get(ce)!==me&&(i.uniformBlockBinding(ce,me,P.__bindingPointIndex),l.set(ce,me))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,ue={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,h=null,T=null,E=null,y=null,D=null,C=null,w=new oe(0,0,0),I=0,S=!1,M=null,R=null,k=null,B=null,W=null,Ye.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Se,bindFramebuffer:qe,drawBuffers:Ce,useProgram:at,setBlending:A,setMaterial:mt,setFlipSided:Ge,setCullFace:Ze,setLineWidth:ye,setPolygonOffset:Xe,setScissorTest:we,activeTexture:Be,bindTexture:ft,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Te,texImage3D:j,updateUBOMapping:Pe,uniformBlockBinding:se,texStorage2D:ae,texStorage3D:ve,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:H,compressedTexSubImage3D:Ee,scissor:fe,viewport:Le,reset:Ne}}function Gp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return m?new OffscreenCanvas(b,_):Fs("canvas")}function v(b,_,F){let q=1;const K=ft(b);if((K.width>F||K.height>F)&&(q=F/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const H=Math.floor(q*K.width),Ee=Math.floor(q*K.height);d===void 0&&(d=g(H,Ee));const ae=_?g(H,Ee):d;return ae.width=H,ae.height=Ee,ae.getContext("2d").drawImage(b,0,0,H,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+Ee+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function p(b){return b.generateMipmaps}function h(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,_,F,q,K=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let H=_;if(_===i.RED&&(F===i.FLOAT&&(H=i.R32F),F===i.HALF_FLOAT&&(H=i.R16F),F===i.UNSIGNED_BYTE&&(H=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.R8UI),F===i.UNSIGNED_SHORT&&(H=i.R16UI),F===i.UNSIGNED_INT&&(H=i.R32UI),F===i.BYTE&&(H=i.R8I),F===i.SHORT&&(H=i.R16I),F===i.INT&&(H=i.R32I)),_===i.RG&&(F===i.FLOAT&&(H=i.RG32F),F===i.HALF_FLOAT&&(H=i.RG16F),F===i.UNSIGNED_BYTE&&(H=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RG8UI),F===i.UNSIGNED_SHORT&&(H=i.RG16UI),F===i.UNSIGNED_INT&&(H=i.RG32UI),F===i.BYTE&&(H=i.RG8I),F===i.SHORT&&(H=i.RG16I),F===i.INT&&(H=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RGB8UI),F===i.UNSIGNED_SHORT&&(H=i.RGB16UI),F===i.UNSIGNED_INT&&(H=i.RGB32UI),F===i.BYTE&&(H=i.RGB8I),F===i.SHORT&&(H=i.RGB16I),F===i.INT&&(H=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),F===i.UNSIGNED_INT&&(H=i.RGBA32UI),F===i.BYTE&&(H=i.RGBA8I),F===i.SHORT&&(H=i.RGBA16I),F===i.INT&&(H=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),_===i.RGBA){const Ee=K?Is:Ke.getTransfer(q);F===i.FLOAT&&(H=i.RGBA32F),F===i.HALF_FLOAT&&(H=i.RGBA16F),F===i.UNSIGNED_BYTE&&(H=Ee===nt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function y(b,_){let F;return b?_===null||_===qn||_===ki?F=i.DEPTH24_STENCIL8:_===mn?F=i.DEPTH32F_STENCIL8:_===zi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===ki?F=i.DEPTH_COMPONENT24:_===mn?F=i.DEPTH_COMPONENT32F:_===zi&&(F=i.DEPTH_COMPONENT16),F}function D(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==jt&&b.minFilter!==sn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function C(b){const _=b.target;_.removeEventListener("dispose",C),I(_),_.isVideoTexture&&u.delete(_)}function w(b){const _=b.target;_.removeEventListener("dispose",w),M(_)}function I(b){const _=n.get(b);if(_.__webglInit===void 0)return;const F=b.source,q=f.get(F);if(q){const K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(b),Object.keys(q).length===0&&f.delete(F)}n.remove(b)}function S(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const F=b.source,q=f.get(F);delete q[_.__cacheKey],a.memory.textures--}function M(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[q][K]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=b.textures;for(let q=0,K=F.length;q<K;q++){const H=n.get(F[q]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(b)}let R=0;function k(){R=0}function B(){const b=R;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function W(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function Y(b,_){const F=n.get(b);if(b.isVideoTexture&&we(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(F,b,_);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function G(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Me(F,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Z(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Me(F,b,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function V(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){le(F,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ie={[zr]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[kr]:i.MIRRORED_REPEAT},ue={[jt]:i.NEAREST,[gc]:i.NEAREST_MIPMAP_NEAREST,[Ki]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[qs]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},xe={[Mc]:i.NEVER,[wc]:i.ALWAYS,[yc]:i.LESS,[ll]:i.LEQUAL,[Sc]:i.EQUAL,[bc]:i.GEQUAL,[Ec]:i.GREATER,[Tc]:i.NOTEQUAL};function Oe(b,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===qs||_.magFilter===Ki||_.magFilter===Xn||_.minFilter===sn||_.minFilter===qs||_.minFilter===Ki||_.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ie[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ie[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ie[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ue[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==Ki&&_.minFilter!==Xn||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ye(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",C));const q=_.source;let K=f.get(q);K===void 0&&(K={},f.set(q,K));const H=W(_);if(H!==b.__cacheKey){K[H]===void 0&&(K[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[H].usedTimes++;const Ee=K[b.__cacheKey];Ee!==void 0&&(K[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(_)),b.__cacheKey=H,b.__webglTexture=K[H].texture}return F}function X(b,_,F){return Math.floor(Math.floor(b/F)/_)}function ee(b,_,F,q){const H=b.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,q,_.data);else{H.sort((j,fe)=>j.start-fe.start);let Ee=0;for(let j=1;j<H.length;j++){const fe=H[Ee],Le=H[j],Pe=fe.start+fe.count,se=X(Le.start,_.width,4),Ne=X(fe.start,_.width,4);Le.start<=Pe+1&&se===Ne&&X(Le.start+Le.count-1,_.width,4)===se?fe.count=Math.max(fe.count,Le.start+Le.count-fe.start):(++Ee,H[Ee]=Le)}H.length=Ee+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let j=0,fe=H.length;j<fe;j++){const Le=H[j],Pe=Math.floor(Le.start/4),se=Math.ceil(Le.count/4),Ne=Pe%_.width,P=Math.floor(Pe/_.width),ce=se,J=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Ne,P,ce,J,F,q,_.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Me(b,_,F){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const K=Ye(b,_),H=_.source;t.bindTexture(q,b.__webglTexture,i.TEXTURE0+F);const Ee=n.get(H);if(H.version!==Ee.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const ae=Ke.getPrimaries(Ke.workingColorSpace),ve=_.colorSpace===An?null:Ke.getPrimaries(_.colorSpace),Te=_.colorSpace===An||ae===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let j=v(_.image,!1,s.maxTextureSize);j=Be(_,j);const fe=r.convert(_.format,_.colorSpace),Le=r.convert(_.type);let Pe=E(_.internalFormat,fe,Le,_.colorSpace,_.isVideoTexture);Oe(q,_);let se;const Ne=_.mipmaps,P=_.isVideoTexture!==!0,ce=Ee.__version===void 0||K===!0,J=H.dataReady,me=D(_,j);if(_.isDepthTexture)Pe=y(_.format===Hi,_.type),ce&&(P?t.texStorage2D(i.TEXTURE_2D,1,Pe,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,Pe,j.width,j.height,0,fe,Le,null));else if(_.isDataTexture)if(Ne.length>0){P&&ce&&t.texStorage2D(i.TEXTURE_2D,me,Pe,Ne[0].width,Ne[0].height);for(let Q=0,$=Ne.length;Q<$;Q++)se=Ne[Q],P?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,se.width,se.height,fe,Le,se.data):t.texImage2D(i.TEXTURE_2D,Q,Pe,se.width,se.height,0,fe,Le,se.data);_.generateMipmaps=!1}else P?(ce&&t.texStorage2D(i.TEXTURE_2D,me,Pe,j.width,j.height),J&&ee(_,j,fe,Le)):t.texImage2D(i.TEXTURE_2D,0,Pe,j.width,j.height,0,fe,Le,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Pe,Ne[0].width,Ne[0].height,j.depth);for(let Q=0,$=Ne.length;Q<$;Q++)if(se=Ne[Q],_.format!==Zt)if(fe!==null)if(P){if(J)if(_.layerUpdates.size>0){const ge=xo(se.width,se.height,_.format,_.type);for(const Fe of _.layerUpdates){const ot=se.data.subarray(Fe*ge/se.data.BYTES_PER_ELEMENT,(Fe+1)*ge/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Fe,se.width,se.height,1,fe,ot)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,se.width,se.height,j.depth,fe,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Pe,se.width,se.height,j.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,se.width,se.height,j.depth,fe,Le,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Pe,se.width,se.height,j.depth,0,fe,Le,se.data)}else{P&&ce&&t.texStorage2D(i.TEXTURE_2D,me,Pe,Ne[0].width,Ne[0].height);for(let Q=0,$=Ne.length;Q<$;Q++)se=Ne[Q],_.format!==Zt?fe!==null?P?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,se.width,se.height,fe,se.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Pe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,se.width,se.height,fe,Le,se.data):t.texImage2D(i.TEXTURE_2D,Q,Pe,se.width,se.height,0,fe,Le,se.data)}else if(_.isDataArrayTexture)if(P){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Pe,j.width,j.height,j.depth),J)if(_.layerUpdates.size>0){const Q=xo(j.width,j.height,_.format,_.type);for(const $ of _.layerUpdates){const ge=j.data.subarray($*Q/j.data.BYTES_PER_ELEMENT,($+1)*Q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,j.width,j.height,1,fe,Le,ge)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,fe,Le,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,j.width,j.height,j.depth,0,fe,Le,j.data);else if(_.isData3DTexture)P?(ce&&t.texStorage3D(i.TEXTURE_3D,me,Pe,j.width,j.height,j.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,fe,Le,j.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,j.width,j.height,j.depth,0,fe,Le,j.data);else if(_.isFramebufferTexture){if(ce)if(P)t.texStorage2D(i.TEXTURE_2D,me,Pe,j.width,j.height);else{let Q=j.width,$=j.height;for(let ge=0;ge<me;ge++)t.texImage2D(i.TEXTURE_2D,ge,Pe,Q,$,0,fe,Le,null),Q>>=1,$>>=1}}else if(Ne.length>0){if(P&&ce){const Q=ft(Ne[0]);t.texStorage2D(i.TEXTURE_2D,me,Pe,Q.width,Q.height)}for(let Q=0,$=Ne.length;Q<$;Q++)se=Ne[Q],P?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,fe,Le,se):t.texImage2D(i.TEXTURE_2D,Q,Pe,fe,Le,se);_.generateMipmaps=!1}else if(P){if(ce){const Q=ft(j);t.texStorage2D(i.TEXTURE_2D,me,Pe,Q.width,Q.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Le,j)}else t.texImage2D(i.TEXTURE_2D,0,Pe,fe,Le,j);p(_)&&h(q),Ee.__version=H.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function le(b,_,F){if(_.image.length!==6)return;const q=Ye(b,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const H=n.get(K);if(K.version!==H.__version||q===!0){t.activeTexture(i.TEXTURE0+F);const Ee=Ke.getPrimaries(Ke.workingColorSpace),ae=_.colorSpace===An?null:Ke.getPrimaries(_.colorSpace),ve=_.colorSpace===An||Ee===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Te=_.isCompressedTexture||_.image[0].isCompressedTexture,j=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!Te&&!j?fe[$]=v(_.image[$],!0,s.maxCubemapSize):fe[$]=j?_.image[$].image:_.image[$],fe[$]=Be(_,fe[$]);const Le=fe[0],Pe=r.convert(_.format,_.colorSpace),se=r.convert(_.type),Ne=E(_.internalFormat,Pe,se,_.colorSpace),P=_.isVideoTexture!==!0,ce=H.__version===void 0||q===!0,J=K.dataReady;let me=D(_,Le);Oe(i.TEXTURE_CUBE_MAP,_);let Q;if(Te){P&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ne,Le.width,Le.height);for(let $=0;$<6;$++){Q=fe[$].mipmaps;for(let ge=0;ge<Q.length;ge++){const Fe=Q[ge];_.format!==Zt?Pe!==null?P?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,Fe.width,Fe.height,Pe,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,Ne,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,Fe.width,Fe.height,Pe,se,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,Ne,Fe.width,Fe.height,0,Pe,se,Fe.data)}}}else{if(Q=_.mipmaps,P&&ce){Q.length>0&&me++;const $=ft(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ne,$.width,$.height)}for(let $=0;$<6;$++)if(j){P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,Pe,se,fe[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,fe[$].width,fe[$].height,0,Pe,se,fe[$].data);for(let ge=0;ge<Q.length;ge++){const ot=Q[ge].image[$].image;P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,ot.width,ot.height,Pe,se,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,Ne,ot.width,ot.height,0,Pe,se,ot.data)}}else{P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pe,se,fe[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,Pe,se,fe[$]);for(let ge=0;ge<Q.length;ge++){const Fe=Q[ge];P?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,Pe,se,Fe.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,Ne,Pe,se,Fe.image[$])}}}p(_)&&h(i.TEXTURE_CUBE_MAP),H.__version=K.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Se(b,_,F,q,K,H){const Ee=r.convert(F.format,F.colorSpace),ae=r.convert(F.type),ve=E(F.internalFormat,Ee,ae,F.colorSpace),Te=n.get(_),j=n.get(F);if(j.__renderTarget=_,!Te.__hasExternalTextures){const fe=Math.max(1,_.width>>H),Le=Math.max(1,_.height>>H);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,H,ve,fe,Le,_.depth,0,Ee,ae,null):t.texImage2D(K,H,ve,fe,Le,0,Ee,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,j.__webglTexture,0,ye(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,j.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(b,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,H=y(_.stencilBuffer,K),Ee=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=ye(_);Xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,H,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,H,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,H,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,b)}else{const q=_.textures;for(let K=0;K<q.length;K++){const H=q[K],Ee=r.convert(H.format,H.colorSpace),ae=r.convert(H.type),ve=E(H.internalFormat,Ee,ae,H.colorSpace),Te=ye(_);F&&Xe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ve,_.width,_.height):Xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,ve,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ve,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const K=q.__webglTexture,H=ye(_);if(_.depthTexture.format===Vi)Xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===Hi)Xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function at(b){const _=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const q=b.texture.mipmaps;q&&q.length>0?Ce(_.__webglFramebuffer[0],b):Ce(_.__webglFramebuffer,b)}else if(F){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),qe(_.__webglDepthbuffer[q],b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,H)}}else{const q=b.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),qe(_.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,H)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(b,_,F){const q=n.get(b);_!==void 0&&Se(q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&at(b)}function He(b){const _=b.texture,F=n.get(b),q=n.get(_);b.addEventListener("dispose",w);const K=b.textures,H=b.isWebGLCubeRenderTarget===!0,Ee=K.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,a.memory.textures++),H){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let ve=0;ve<_.mipmaps.length;ve++)F.__webglFramebuffer[ae][ve]=i.createFramebuffer()}else F.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)F.__webglFramebuffer[ae]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ae=0,ve=K.length;ae<ve;ae++){const Te=n.get(K[ae]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Xe(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const ve=K[ae];F.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);const Te=r.convert(ve.format,ve.colorSpace),j=r.convert(ve.type),fe=E(ve.internalFormat,Te,j,ve.colorSpace,b.isXRRenderTarget===!0),Le=ye(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,fe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)Se(F.__webglFramebuffer[ae][ve],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve);else Se(F.__webglFramebuffer[ae],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(_)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ae=0,ve=K.length;ae<ve;ae++){const Te=K[ae],j=n.get(Te);t.bindTexture(i.TEXTURE_2D,j.__webglTexture),Oe(i.TEXTURE_2D,Te),Se(F.__webglFramebuffer,b,Te,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),p(Te)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,q.__webglTexture),Oe(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)Se(F.__webglFramebuffer[ve],b,_,i.COLOR_ATTACHMENT0,ae,ve);else Se(F.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,ae,0);p(_)&&h(ae),t.unbindTexture()}b.depthBuffer&&at(b)}function A(b){const _=b.textures;for(let F=0,q=_.length;F<q;F++){const K=_[F];if(p(K)){const H=T(b),Ee=n.get(K).__webglTexture;t.bindTexture(H,Ee),h(H),t.unbindTexture()}}}const mt=[],Ge=[];function Ze(b){if(b.samples>0){if(Xe(b)===!1){const _=b.textures,F=b.width,q=b.height;let K=i.COLOR_BUFFER_BIT;const H=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(b),ae=_.length>1;if(ae)for(let Te=0;Te<_.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const ve=b.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const j=n.get(_[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,K,i.NEAREST),l===!0&&(mt.length=0,Ge.length=0,mt.push(i.COLOR_ATTACHMENT0+Te),b.depthBuffer&&b.resolveDepthBuffer===!1&&(mt.push(H),Ge.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Te=0;Te<_.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const j=n.get(_[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ye(b){return Math.min(s.maxSamples,b.samples)}function Xe(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function we(b){const _=a.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function Be(b,_){const F=b.colorSpace,q=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Ei&&F!==An&&(Ke.getTransfer(F)===nt?(q!==Zt||K!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ft(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=tt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Xe}function Wp(i,e){function t(n,s=An){let r;const a=Ke.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qo)return i.BYTE;if(n===el)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===nl)return i.ALPHA;if(n===il)return i.RGB;if(n===Zt)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===rl)return i.RG;if(n===Sa)return i.RG_INTEGER;if(n===Ea)return i.RGBA_INTEGER;if(n===Ss||n===Es||n===Ts||n===bs)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ss)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ss)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vr||n===Hr||n===Gr||n===Wr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===qr||n===Yr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xr||n===qr)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$r||n===Kr||n===Zr||n===jr||n===Jr||n===Qr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$r)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ws||n===la||n===ca)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ws)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ha||n===ua||n===da)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ws)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Xp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Pt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bt({vertexShader:Xp,fragmentShader:qp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $p extends wi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const v=new Yp,p=t.getContextAttributes();let h=null,T=null;const E=[],y=[],D=new De;let C=null;const w=new St;w.viewport=new dt;const I=new St;I.viewport=new dt;const S=[w,I],M=new fh;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=E[X];return ee===void 0&&(ee=new mr,E[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=E[X];return ee===void 0&&(ee=new mr,E[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=E[X];return ee===void 0&&(ee=new mr,E[X]=ee),ee.getHandSpace()};function B(X){const ee=y.indexOf(X.inputSource);if(ee===-1)return;const Me=E[ee];Me!==void 0&&(Me.update(X.inputSource,X.frame,c||a),Me.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let X=0;X<E.length;X++){const ee=y[X];ee!==null&&(y[X]=null,E[X].disconnect(ee))}R=null,k=null,v.reset(),e.setRenderTarget(h),m=null,f=null,d=null,s=null,T=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,le=null,Se=null;p.depth&&(Se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=p.stencil?Hi:Vi,le=p.stencil?ki:qn);const qe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Jt(f.textureWidth,f.textureHeight,{format:Zt,type:rn,depthTexture:new Sl(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Jt(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(X){for(let ee=0;ee<X.removed.length;ee++){const Me=X.removed[ee],le=y.indexOf(Me);le>=0&&(y[le]=null,E[le].disconnect(Me))}for(let ee=0;ee<X.added.length;ee++){const Me=X.added[ee];let le=y.indexOf(Me);if(le===-1){for(let qe=0;qe<E.length;qe++)if(qe>=y.length){y.push(Me),le=qe;break}else if(y[qe]===null){y[qe]=Me,le=qe;break}if(le===-1)break}const Se=E[le];Se&&Se.connect(Me)}}const G=new L,Z=new L;function V(X,ee,Me){G.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(Me.matrixWorld);const le=G.distanceTo(Z),Se=ee.projectionMatrix.elements,qe=Me.projectionMatrix.elements,Ce=Se[14]/(Se[10]-1),at=Se[14]/(Se[10]+1),tt=(Se[9]+1)/Se[5],He=(Se[9]-1)/Se[5],A=(Se[8]-1)/Se[0],mt=(qe[8]+1)/qe[0],Ge=Ce*A,Ze=Ce*mt,ye=le/(-A+mt),Xe=ye*-A;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Xe),X.translateZ(ye),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Se[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const we=Ce+ye,Be=at+ye,ft=Ge-Xe,b=Ze+(le-Xe),_=tt*at/Be*we,F=He*at/Be*we;X.projectionMatrix.makePerspective(ft,b,_,F,we,Be),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ie(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ee=X.near,Me=X.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),M.near=I.near=w.near=ee,M.far=I.far=w.far=Me,(R!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,k=M.far),w.layers.mask=X.layers.mask|2,I.layers.mask=X.layers.mask|4,M.layers.mask=w.layers.mask|I.layers.mask;const le=X.parent,Se=M.cameras;ie(M,le);for(let qe=0;qe<Se.length;qe++)ie(Se[qe],le);Se.length===2?V(M,w,I):M.projectionMatrix.copy(w.projectionMatrix),ue(X,M,le)};function ue(X,ee,Me){Me===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(Me.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ns*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let xe=null;function Oe(X,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let le=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Ce=0;Ce<Me.length;Ce++){const at=Me[Ce];let tt=null;if(m!==null)tt=m.getViewport(at);else{const A=d.getViewSubImage(f,at);tt=A.viewport,Ce===0&&(e.setRenderTargetTextures(T,A.colorTexture,A.depthStencilTexture),e.setRenderTarget(T))}let He=S[Ce];He===void 0&&(He=new St,He.layers.enable(Ce),He.viewport=new dt,S[Ce]=He),He.matrix.fromArray(at.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(at.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(tt.x,tt.y,tt.width,tt.height),Ce===0&&(M.matrix.copy(He.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(He)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Ce=d.getDepthInformation(Me[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,s.renderState)}}for(let Me=0;Me<E.length;Me++){const le=y[Me],Se=E[Me];le!==null&&Se!==void 0&&Se.update(le,ee,c||a)}xe&&xe(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ye=new Tl;Ye.setAnimationLoop(Oe),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const On=new an,Kp=new ct;function Zp(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,gl(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,T,E,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),v(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,T,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Rt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Rt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h),E=T.envMap,y=T.envMapRotation;E&&(p.envMap.value=E,On.copy(y),On.x*=-1,On.y*=-1,On.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),p.envMapRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(On)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=E*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jp(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const y=E.program;n.uniformBlockBinding(T,y)}function c(T,E){let y=s[T.id];y===void 0&&(g(T),y=u(T),s[T.id]=y,T.addEventListener("dispose",p));const D=E.program;n.updateUBOMapping(T,D);const C=e.render.frame;r[T.id]!==C&&(f(T),r[T.id]=C)}function u(T){const E=d();T.__bindingPointIndex=E;const y=i.createBuffer(),D=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=s[T.id],y=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,w=y.length;C<w;C++){const I=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,M=I.length;S<M;S++){const R=I[S];if(m(R,C,S,D)===!0){const k=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let Y=0;Y<B.length;Y++){const G=B[Y],Z=v(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,k+W,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,E,y,D){const C=T.value,w=E+"_"+y;if(D[w]===void 0)return typeof C=="number"||typeof C=="boolean"?D[w]=C:D[w]=C.clone(),!0;{const I=D[w];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return D[w]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(T){const E=T.uniforms;let y=0;const D=16;for(let w=0,I=E.length;w<I;w++){const S=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,R=S.length;M<R;M++){const k=S[M],B=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Y=B.length;W<Y;W++){const G=B[W],Z=v(G),V=y%D,ie=V%Z.boundary,ue=V+ie;y+=ie,ue!==0&&D-ue<Z.storage&&(y+=D-ue),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=Z.storage}}}const C=y%D;return C>0&&(y+=D-C),T.__size=y,T.__cache={},this}function v(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function p(T){const E=T.target;E.removeEventListener("dispose",p);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Jp{constructor(e={}){const{canvas:t=Cc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let D=!1;this._outputColorSpace=Ot;let C=0,w=0,I=null,S=-1,M=null;const R=new dt,k=new dt;let B=null;const W=new oe(0);let Y=0,G=t.width,Z=t.height,V=1,ie=null,ue=null;const xe=new dt(0,0,G,Z),Oe=new dt(0,0,G,Z);let Ye=!1;const X=new wa;let ee=!1,Me=!1;const le=new ct,Se=new ct,qe=new L,Ce=new dt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function He(){return I===null?V:1}let A=n;function mt(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_a}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",$,!1),A===null){const U="webgl2";if(A=mt(U,x),A===null)throw mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ge,Ze,ye,Xe,we,Be,ft,b,_,F,q,K,H,Ee,ae,ve,Te,j,fe,Le,Pe,se,Ne,P;function ce(){Ge=new lf(A),Ge.init(),se=new Wp(A,Ge),Ze=new ef(A,Ge,e,se),ye=new Hp(A,Ge),Ze.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),Xe=new uf(A),we=new Rp,Be=new Gp(A,Ge,ye,we,Ze,se,Xe),ft=new nf(y),b=new of(y),_=new gh(A),Ne=new Jd(A,_),F=new cf(A,_,Xe,Ne),q=new ff(A,F,_,Xe),fe=new df(A,Ze,Be),ve=new tf(we),K=new Cp(y,ft,b,Ge,Ze,Ne,ve),H=new Zp(y,we),Ee=new Dp,ae=new Bp(Ge),j=new jd(y,ft,b,ye,q,m,l),Te=new kp(y,q,Ze),P=new jp(A,Xe,Ze,ye),Le=new Qd(A,Ge,Xe),Pe=new hf(A,Ge,Xe),Xe.programs=K.programs,y.capabilities=Ze,y.extensions=Ge,y.properties=we,y.renderLists=Ee,y.shadowMap=Te,y.state=ye,y.info=Xe}ce();const J=new $p(y,A);this.xr=J,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const x=Ge.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ge.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(G,Z,!1))},this.getSize=function(x){return x.set(G,Z)},this.setSize=function(x,U,O=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,Z=U,t.width=Math.floor(x*V),t.height=Math.floor(U*V),O===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(G*V,Z*V).floor()},this.setDrawingBufferSize=function(x,U,O){G=x,Z=U,V=O,t.width=Math.floor(x*O),t.height=Math.floor(U*O),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(xe)},this.setViewport=function(x,U,O,z){x.isVector4?xe.set(x.x,x.y,x.z,x.w):xe.set(x,U,O,z),ye.viewport(R.copy(xe).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(Oe)},this.setScissor=function(x,U,O,z){x.isVector4?Oe.set(x.x,x.y,x.z,x.w):Oe.set(x,U,O,z),ye.scissor(k.copy(Oe).multiplyScalar(V).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(x){ye.setScissorTest(Ye=x)},this.setOpaqueSort=function(x){ie=x},this.setTransparentSort=function(x){ue=x},this.getClearColor=function(x){return x.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,O=!0){let z=0;if(x){let N=!1;if(I!==null){const te=I.texture.format;N=te===Ea||te===Sa||te===ya}if(N){const te=I.texture.type,he=te===rn||te===qn||te===zi||te===ki||te===xa||te===Ma,_e=j.getClearColor(),pe=j.getClearAlpha(),Ie=_e.r,Ue=_e.g,be=_e.b;he?(g[0]=Ie,g[1]=Ue,g[2]=be,g[3]=pe,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=Ie,v[1]=Ue,v[2]=be,v[3]=pe,A.clearBufferiv(A.COLOR,0,v))}else z|=A.COLOR_BUFFER_BIT}U&&(z|=A.DEPTH_BUFFER_BIT),O&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",$,!1),j.dispose(),Ee.dispose(),ae.dispose(),we.dispose(),ft.dispose(),b.dispose(),q.dispose(),Ne.dispose(),P.dispose(),K.dispose(),J.dispose(),J.removeEventListener("sessionstart",Na),J.removeEventListener("sessionend",Fa),Dn.stop()};function me(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const x=Xe.autoReset,U=Te.enabled,O=Te.autoUpdate,z=Te.needsUpdate,N=Te.type;ce(),Xe.autoReset=x,Te.enabled=U,Te.autoUpdate=O,Te.needsUpdate=z,Te.type=N}function $(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ge(x){const U=x.target;U.removeEventListener("dispose",ge),Fe(U)}function Fe(x){ot(x),we.remove(x)}function ot(x){const U=we.get(x).programs;U!==void 0&&(U.forEach(function(O){K.releaseProgram(O)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,O,z,N,te){U===null&&(U=at);const he=N.isMesh&&N.matrixWorld.determinant()<0,_e=Fl(x,U,O,z,N);ye.setMaterial(z,he);let pe=O.index,Ie=1;if(z.wireframe===!0){if(pe=F.getWireframeAttribute(O),pe===void 0)return;Ie=2}const Ue=O.drawRange,be=O.attributes.position;let We=Ue.start*Ie,et=(Ue.start+Ue.count)*Ie;te!==null&&(We=Math.max(We,te.start*Ie),et=Math.min(et,(te.start+te.count)*Ie)),pe!==null?(We=Math.max(We,0),et=Math.min(et,pe.count)):be!=null&&(We=Math.max(We,0),et=Math.min(et,be.count));const ht=et-We;if(ht<0||ht===1/0)return;Ne.setup(N,z,_e,O,pe);let ut,$e=Le;if(pe!==null&&(ut=_.get(pe),$e=Pe,$e.setIndex(ut)),N.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*He()),$e.setMode(A.LINES)):$e.setMode(A.TRIANGLES);else if(N.isLine){let Re=z.linewidth;Re===void 0&&(Re=1),ye.setLineWidth(Re*He()),N.isLineSegments?$e.setMode(A.LINES):N.isLineLoop?$e.setMode(A.LINE_LOOP):$e.setMode(A.LINE_STRIP)}else N.isPoints?$e.setMode(A.POINTS):N.isSprite&&$e.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)_i("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))$e.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,yt=N._multiDrawCounts,je=N._multiDrawCount,Xt=pe?_.get(pe).bytesPerElement:1,Kn=we.get(z).currentProgram.getUniforms();for(let Nt=0;Nt<je;Nt++)Kn.setValue(A,"_gl_DrawID",Nt),$e.render(Re[Nt]/Xt,yt[Nt])}else if(N.isInstancedMesh)$e.renderInstances(We,ht,N.count);else if(O.isInstancedBufferGeometry){const Re=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,yt=Math.min(O.instanceCount,Re);$e.renderInstances(We,ht,yt)}else $e.render(We,ht)};function Qe(x,U,O){x.transparent===!0&&x.side===pn&&x.forceSinglePass===!1?(x.side=Rt,x.needsUpdate=!0,$i(x,U,O),x.side=Pn,x.needsUpdate=!0,$i(x,U,O),x.side=pn):$i(x,U,O)}this.compile=function(x,U,O=null){O===null&&(O=x),h=ae.get(O),h.init(U),E.push(h),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),x!==O&&x.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const z=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const _e=te[he];Qe(_e,O,N),z.add(_e)}else Qe(te,O,N),z.add(te)}),h=E.pop(),z},this.compileAsync=function(x,U,O=null){const z=this.compile(x,U,O);return new Promise(N=>{function te(){if(z.forEach(function(he){we.get(he).currentProgram.isReady()&&z.delete(he)}),z.size===0){N(x);return}setTimeout(te,10)}Ge.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Wt=null;function on(x){Wt&&Wt(x)}function Na(){Dn.stop()}function Fa(){Dn.start()}const Dn=new Tl;Dn.setAnimationLoop(on),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(x){Wt=x,J.setAnimationLoop(x),x===null?Dn.stop():Dn.start()},J.addEventListener("sessionstart",Na),J.addEventListener("sessionend",Fa),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(U),U=J.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,U,I),h=ae.get(x,E.length),h.init(U),E.push(h),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Se),Me=this.localClippingEnabled,ee=ve.init(this.clippingPlanes,Me),p=Ee.get(x,T.length),p.init(),T.push(p),J.enabled===!0&&J.isPresenting===!0){const te=y.xr.getDepthSensingMesh();te!==null&&Ws(te,U,-1/0,y.sortObjects)}Ws(x,U,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(ie,ue),tt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,tt&&j.addToRenderList(p,x),this.info.render.frame++,ee===!0&&ve.beginShadows();const O=h.state.shadowsArray;Te.render(O,x,U),ee===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,N=p.transmissive;if(h.setupLights(),U.isArrayCamera){const te=U.cameras;if(N.length>0)for(let he=0,_e=te.length;he<_e;he++){const pe=te[he];Oa(z,N,x,pe)}tt&&j.render(x);for(let he=0,_e=te.length;he<_e;he++){const pe=te[he];Ba(p,x,pe,pe.viewport)}}else N.length>0&&Oa(z,N,x,U),tt&&j.render(x),Ba(p,x,U);I!==null&&w===0&&(Be.updateMultisampleRenderTarget(I),Be.updateRenderTargetMipmap(I)),x.isScene===!0&&x.onAfterRender(y,x,U),Ne.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(h=E[E.length-1],ee===!0&&ve.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Ws(x,U,O,z){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||X.intersectsSprite(x)){z&&Ce.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Se);const he=q.update(x),_e=x.material;_e.visible&&p.push(x,he,_e,O,Ce.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||X.intersectsObject(x))){const he=q.update(x),_e=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ce.copy(x.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ce.copy(he.boundingSphere.center)),Ce.applyMatrix4(x.matrixWorld).applyMatrix4(Se)),Array.isArray(_e)){const pe=he.groups;for(let Ie=0,Ue=pe.length;Ie<Ue;Ie++){const be=pe[Ie],We=_e[be.materialIndex];We&&We.visible&&p.push(x,he,We,O,Ce.z,be)}}else _e.visible&&p.push(x,he,_e,O,Ce.z,null)}}const te=x.children;for(let he=0,_e=te.length;he<_e;he++)Ws(te[he],U,O,z)}function Ba(x,U,O,z){const N=x.opaque,te=x.transmissive,he=x.transparent;h.setupLightsView(O),ee===!0&&ve.setGlobalState(y.clippingPlanes,O),z&&ye.viewport(R.copy(z)),N.length>0&&Yi(N,U,O),te.length>0&&Yi(te,U,O),he.length>0&&Yi(he,U,O),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Oa(x,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new Jt(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?vn:rn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const te=h.state.transmissionRenderTarget[z.id],he=z.viewport||R;te.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);const _e=y.getRenderTarget();y.setRenderTarget(te),y.getClearColor(W),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),tt&&j.render(O);const pe=y.toneMapping;y.toneMapping=Cn;const Ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),ee===!0&&ve.setGlobalState(y.clippingPlanes,z),Yi(x,O,z),Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let be=0,We=U.length;be<We;be++){const et=U[be],ht=et.object,ut=et.geometry,$e=et.material,Re=et.group;if($e.side===pn&&ht.layers.test(z.layers)){const yt=$e.side;$e.side=Rt,$e.needsUpdate=!0,za(ht,O,z,ut,$e,Re),$e.side=yt,$e.needsUpdate=!0,Ue=!0}}Ue===!0&&(Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te))}y.setRenderTarget(_e),y.setClearColor(W,Y),Ie!==void 0&&(z.viewport=Ie),y.toneMapping=pe}function Yi(x,U,O){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,te=x.length;N<te;N++){const he=x[N],_e=he.object,pe=he.geometry,Ie=he.group;let Ue=he.material;Ue.allowOverride===!0&&z!==null&&(Ue=z),_e.layers.test(O.layers)&&za(_e,U,O,pe,Ue,Ie)}}function za(x,U,O,z,N,te){x.onBeforeRender(y,U,O,z,N,te),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(y,U,O,z,x,te),N.transparent===!0&&N.side===pn&&N.forceSinglePass===!1?(N.side=Rt,N.needsUpdate=!0,y.renderBufferDirect(O,U,z,N,x,te),N.side=Pn,N.needsUpdate=!0,y.renderBufferDirect(O,U,z,N,x,te),N.side=pn):y.renderBufferDirect(O,U,z,N,x,te),x.onAfterRender(y,U,O,z,N,te)}function $i(x,U,O){U.isScene!==!0&&(U=at);const z=we.get(x),N=h.state.lights,te=h.state.shadowsArray,he=N.state.version,_e=K.getParameters(x,N.state,te,U,O),pe=K.getProgramCacheKey(_e);let Ie=z.programs;z.environment=x.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(x.isMeshStandardMaterial?b:ft).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ie===void 0&&(x.addEventListener("dispose",ge),Ie=new Map,z.programs=Ie);let Ue=Ie.get(pe);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===he)return Va(x,_e),Ue}else _e.uniforms=K.getUniforms(x),x.onBeforeCompile(_e,y),Ue=K.acquireProgram(_e,pe),Ie.set(pe,Ue),z.uniforms=_e.uniforms;const be=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=ve.uniform),Va(x,_e),z.needsLights=Ol(x),z.lightsStateVersion=he,z.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function ka(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Cs.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function Va(x,U){const O=we.get(x);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Fl(x,U,O,z,N){U.isScene!==!0&&(U=at),Be.resetTextureUnits();const te=U.fog,he=z.isMeshStandardMaterial?U.environment:null,_e=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ei,pe=(z.isMeshStandardMaterial?b:ft).get(z.envMap||he),Ie=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ue=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!O.morphAttributes.position,We=!!O.morphAttributes.normal,et=!!O.morphAttributes.color;let ht=Cn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ht=y.toneMapping);const ut=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$e=ut!==void 0?ut.length:0,Re=we.get(z),yt=h.state.lights;if(ee===!0&&(Me===!0||x!==M)){const wt=x===M&&z.id===S;ve.setState(z,x,wt)}let je=!1;z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==yt.state.version||Re.outputColorSpace!==_e||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==pe||z.fog===!0&&Re.fog!==te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ve.numPlanes||Re.numIntersection!==ve.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Ue||Re.morphTargets!==be||Re.morphNormals!==We||Re.morphColors!==et||Re.toneMapping!==ht||Re.morphTargetsCount!==$e)&&(je=!0):(je=!0,Re.__version=z.version);let Xt=Re.currentProgram;je===!0&&(Xt=$i(z,U,N));let Kn=!1,Nt=!1,Ri=!1;const lt=Xt.getUniforms(),zt=Re.uniforms;if(ye.useProgram(Xt.program)&&(Kn=!0,Nt=!0,Ri=!0),z.id!==S&&(S=z.id,Nt=!0),Kn||M!==x){ye.buffers.depth.getReversed()?(le.copy(x.projectionMatrix),Pc(le),Dc(le),lt.setValue(A,"projectionMatrix",le)):lt.setValue(A,"projectionMatrix",x.projectionMatrix),lt.setValue(A,"viewMatrix",x.matrixWorldInverse);const Dt=lt.map.cameraPosition;Dt!==void 0&&Dt.setValue(A,qe.setFromMatrixPosition(x.matrixWorld)),Ze.logarithmicDepthBuffer&&lt.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Nt=!0,Ri=!0)}if(N.isSkinnedMesh){lt.setOptional(A,N,"bindMatrix"),lt.setOptional(A,N,"bindMatrixInverse");const wt=N.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),lt.setValue(A,"boneTexture",wt.boneTexture,Be))}N.isBatchedMesh&&(lt.setOptional(A,N,"batchingTexture"),lt.setValue(A,"batchingTexture",N._matricesTexture,Be),lt.setOptional(A,N,"batchingIdTexture"),lt.setValue(A,"batchingIdTexture",N._indirectTexture,Be),lt.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(A,"batchingColorTexture",N._colorsTexture,Be));const kt=O.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&fe.update(N,O,Xt),(Nt||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,lt.setValue(A,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(zt.envMap.value=pe,zt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(zt.envMapIntensity.value=U.environmentIntensity),Nt&&(lt.setValue(A,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&Bl(zt,Ri),te&&z.fog===!0&&H.refreshFogUniforms(zt,te),H.refreshMaterialUniforms(zt,z,V,Z,h.state.transmissionRenderTarget[x.id]),Cs.upload(A,ka(Re),zt,Be)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Cs.upload(A,ka(Re),zt,Be),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(A,"center",N.center),lt.setValue(A,"modelViewMatrix",N.modelViewMatrix),lt.setValue(A,"normalMatrix",N.normalMatrix),lt.setValue(A,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const wt=z.uniformsGroups;for(let Dt=0,Xs=wt.length;Dt<Xs;Dt++){const Ln=wt[Dt];P.update(Ln,Xt),P.bind(Ln,Xt)}}return Xt}function Bl(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Ol(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(x,U,O){const z=we.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),we.get(x.texture).__webglTexture=U,we.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:O,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const O=we.get(x);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const zl=A.createFramebuffer();this.setRenderTarget=function(x,U=0,O=0){I=x,C=U,w=O;let z=!0,N=null,te=!1,he=!1;if(x){const pe=we.get(x);if(pe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(pe.__webglFramebuffer===void 0)Be.setupRenderTarget(x);else if(pe.__hasExternalTextures)Be.rebindTextures(x,we.get(x.texture).__webglTexture,we.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const be=x.depthTexture;if(pe.__boundDepthTexture!==be){if(be!==null&&we.has(be)&&(x.width!==be.image.width||x.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(x)}}const Ie=x.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(he=!0);const Ue=we.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?N=Ue[U][O]:N=Ue[U],te=!0):x.samples>0&&Be.useMultisampledRTT(x)===!1?N=we.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[O]:N=Ue,R.copy(x.viewport),k.copy(x.scissor),B=x.scissorTest}else R.copy(xe).multiplyScalar(V).floor(),k.copy(Oe).multiplyScalar(V).floor(),B=Ye;if(O!==0&&(N=zl),ye.bindFramebuffer(A.FRAMEBUFFER,N)&&z&&ye.drawBuffers(x,N),ye.viewport(R),ye.scissor(k),ye.setScissorTest(B),te){const pe=we.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,O)}else if(he){const pe=we.get(x.texture),Ie=U;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,pe.__webglTexture,O,Ie)}else if(x!==null&&O!==0){const pe=we.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,pe.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(x,U,O,z,N,te,he,_e=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=we.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){ye.bindFramebuffer(A.FRAMEBUFFER,pe);try{const Ie=x.textures[_e],Ue=Ie.format,be=Ie.type;if(!Ze.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-z&&O>=0&&O<=x.height-N&&(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+_e),A.readPixels(U,O,z,N,se.convert(Ue),se.convert(be),te))}finally{const Ie=I!==null?we.get(I).__webglFramebuffer:null;ye.bindFramebuffer(A.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(x,U,O,z,N,te,he,_e=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=we.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(U>=0&&U<=x.width-z&&O>=0&&O<=x.height-N){ye.bindFramebuffer(A.FRAMEBUFFER,pe);const Ie=x.textures[_e],Ue=Ie.format,be=Ie.type;if(!Ze.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,We),A.bufferData(A.PIXEL_PACK_BUFFER,te.byteLength,A.STREAM_READ),x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+_e),A.readPixels(U,O,z,N,se.convert(Ue),se.convert(be),0);const et=I!==null?we.get(I).__webglFramebuffer:null;ye.bindFramebuffer(A.FRAMEBUFFER,et);const ht=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Rc(A,ht,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,We),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,te),A.deleteBuffer(We),A.deleteSync(ht),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,O=0){const z=Math.pow(2,-O),N=Math.floor(x.image.width*z),te=Math.floor(x.image.height*z),he=U!==null?U.x:0,_e=U!==null?U.y:0;Be.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,O,0,0,he,_e,N,te),ye.unbindTexture()};const kl=A.createFramebuffer(),Vl=A.createFramebuffer();this.copyTextureToTexture=function(x,U,O=null,z=null,N=0,te=null){te===null&&(N!==0?(_i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let he,_e,pe,Ie,Ue,be,We,et,ht;const ut=x.isCompressedTexture?x.mipmaps[te]:x.image;if(O!==null)he=O.max.x-O.min.x,_e=O.max.y-O.min.y,pe=O.isBox3?O.max.z-O.min.z:1,Ie=O.min.x,Ue=O.min.y,be=O.isBox3?O.min.z:0;else{const kt=Math.pow(2,-N);he=Math.floor(ut.width*kt),_e=Math.floor(ut.height*kt),x.isDataArrayTexture?pe=ut.depth:x.isData3DTexture?pe=Math.floor(ut.depth*kt):pe=1,Ie=0,Ue=0,be=0}z!==null?(We=z.x,et=z.y,ht=z.z):(We=0,et=0,ht=0);const $e=se.convert(U.format),Re=se.convert(U.type);let yt;U.isData3DTexture?(Be.setTexture3D(U,0),yt=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),yt=A.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),yt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const je=A.getParameter(A.UNPACK_ROW_LENGTH),Xt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Kn=A.getParameter(A.UNPACK_SKIP_PIXELS),Nt=A.getParameter(A.UNPACK_SKIP_ROWS),Ri=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ut.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ut.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ie),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,be);const lt=x.isDataArrayTexture||x.isData3DTexture,zt=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const kt=we.get(x),wt=we.get(U),Dt=we.get(kt.__renderTarget),Xs=we.get(wt.__renderTarget);ye.bindFramebuffer(A.READ_FRAMEBUFFER,Dt.__webglFramebuffer),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Ln=0;Ln<pe;Ln++)lt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,we.get(x).__webglTexture,N,be+Ln),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,we.get(U).__webglTexture,te,ht+Ln)),A.blitFramebuffer(Ie,Ue,he,_e,We,et,he,_e,A.DEPTH_BUFFER_BIT,A.NEAREST);ye.bindFramebuffer(A.READ_FRAMEBUFFER,null),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||we.has(x)){const kt=we.get(x),wt=we.get(U);ye.bindFramebuffer(A.READ_FRAMEBUFFER,kl),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,Vl);for(let Dt=0;Dt<pe;Dt++)lt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,kt.__webglTexture,N,be+Dt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,kt.__webglTexture,N),zt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,wt.__webglTexture,te,ht+Dt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,wt.__webglTexture,te),N!==0?A.blitFramebuffer(Ie,Ue,he,_e,We,et,he,_e,A.COLOR_BUFFER_BIT,A.NEAREST):zt?A.copyTexSubImage3D(yt,te,We,et,ht+Dt,Ie,Ue,he,_e):A.copyTexSubImage2D(yt,te,We,et,Ie,Ue,he,_e);ye.bindFramebuffer(A.READ_FRAMEBUFFER,null),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else zt?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(yt,te,We,et,ht,he,_e,pe,$e,Re,ut.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(yt,te,We,et,ht,he,_e,pe,$e,ut.data):A.texSubImage3D(yt,te,We,et,ht,he,_e,pe,$e,Re,ut):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,te,We,et,he,_e,$e,Re,ut.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,te,We,et,ut.width,ut.height,$e,ut.data):A.texSubImage2D(A.TEXTURE_2D,te,We,et,he,_e,$e,Re,ut);A.pixelStorei(A.UNPACK_ROW_LENGTH,je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Xt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Kn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Nt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ri),te===0&&U.generateMipmaps&&A.generateMipmap(yt),ye.unbindTexture()},this.copyTextureToTexture3D=function(x,U,O=null,z=null,N=0){return _i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,O,z,N)},this.initRenderTarget=function(x){we.get(x).__webglFramebuffer===void 0&&Be.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Be.setTextureCube(x,0):x.isData3DTexture?Be.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Be.setTexture2DArray(x,0):Be.setTexture2D(x,0),ye.unbindTexture()},this.resetState=function(){C=0,w=0,I=null,ye.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Rs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ci{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Qp=new Pa(-1,1,1,-1,0,1);class em extends Ut{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}}const tm=new em;class La{constructor(e){this._mesh=new de(tm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nm extends Ci{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gi.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new La(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wo extends Ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class im extends Ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nm(Rs),this.copyPass.material.blending=_n,this.clock=new ph}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wo!==void 0&&(a instanceof Wo?n=!0:a instanceof im&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const rm={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`};class am extends Ci{constructor(e=.5,t=!1){super();const n=rm;this.uniforms=Gi.clone(n.uniforms),this.material=new bt({name:n.name,uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.uniforms.intensity.value=e,this.uniforms.grayscale.value=t,this._fsQuad=new La(this.material)}render(e,t,n,s){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=s,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class om extends Ci{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const lm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class bi extends Ci{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,a,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Jt(r,a,{type:vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Jt(r,a,{type:vn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=lm;this.highPassUniforms=Gi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new De(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Gi.clone(Rs.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:Rs.vertexShader,fragmentShader:Rs.fragmentShader,blending:Ls,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new oe,this._oldClearAlpha=1,this._basic=new Hs,this._fsQuad=new La(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new De(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=bi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=bi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}bi.BlurDirectionX=new De(1,0);bi.BlurDirectionY=new De(0,1);const Ia="autobahn-rush-save",xi=[{id:"endless",name:"Endless Traffic",desc:"Classic high-speed traffic weaving with escalating density and generous combo windows.",weather:"day",trafficFlow:"one-way",police:!1,hardcore:!1,timer:0,reward:1},{id:"time-trial",name:"Time Trial",desc:"Beat the clock and hold high average speed while threading through medium-density traffic.",weather:"sunset",trafficFlow:"one-way",police:!1,hardcore:!1,timer:90,reward:1.15},{id:"two-way",name:"Two-Way Traffic",desc:"Oncoming traffic turns wrong-lane overtakes into the highest-paying risk in the game.",weather:"day",trafficFlow:"two-way",police:!1,hardcore:!1,timer:0,reward:1.3},{id:"police",name:"Police Chase",desc:"Wanted level climbs fast as interceptor units spawn behind and beside the player.",weather:"night",trafficFlow:"two-way",police:!0,hardcore:!1,timer:0,reward:1.45},{id:"rain",name:"Rain Challenge",desc:"Low grip, long braking zones, and reflective asphalt push the handling model harder.",weather:"rain",trafficFlow:"one-way",police:!1,hardcore:!1,timer:0,reward:1.35},{id:"night",name:"Night Run",desc:"Headlights, street lamps, bloom, and limited visibility raise the payout multiplier.",weather:"night",trafficFlow:"one-way",police:!1,hardcore:!1,timer:0,reward:1.25},{id:"career",name:"Career Missions",desc:"Mission-focused sessions that rotate objectives and grant higher progression rewards.",weather:"sunset",trafficFlow:"one-way",police:!1,hardcore:!1,timer:120,reward:1.25},{id:"free",name:"Free Ride",desc:"Cruise with low stakes, easier traffic, and damage instead of instant failure.",weather:"day",trafficFlow:"one-way",police:!1,hardcore:!1,timer:0,reward:.8},{id:"hardcore",name:"Hardcore Mode",desc:"One crash ends the run, damage hits harder, and combo decay is much less forgiving.",weather:"fog",trafficFlow:"two-way",police:!1,hardcore:!0,timer:0,reward:1.75},{id:"delivery",name:"Delivery Challenge",desc:"Balance speed with consistency while carrying a fragile timed package through dense traffic.",weather:"storm",trafficFlow:"one-way",police:!1,hardcore:!1,timer:100,reward:1.2}],Oi=[{id:"m1",title:"Drive 5 km without crashing",goal:5,type:"distance",reward:1200},{id:"m2",title:"Reach 200 km/h",goal:200,type:"topSpeed",reward:900},{id:"m3",title:"Complete 20 near misses",goal:20,type:"nearMiss",reward:1500},{id:"m4",title:"Escape police for 2 minutes",goal:120,type:"policeTime",reward:1800},{id:"m5",title:"Finish a night run",goal:1,type:"nightFinish",reward:950},{id:"m6",title:"Drive in rain for 3 km",goal:3,type:"rainDistance",reward:1100},{id:"m7",title:"Overtake 10 trucks",goal:10,type:"truckPass",reward:1400},{id:"m8",title:"Earn a 5x combo",goal:5,type:"combo",reward:1300},{id:"m9",title:"Complete a time trial",goal:1,type:"timeTrialFinish",reward:1e3},{id:"m10",title:"Drive opposite lane for 30 seconds",goal:30,type:"wrongLaneTime",reward:1250}],Rl=[{id:"a1",title:"Autobahn Rookie",desc:"Travel 10 km total.",type:"lifetimeDistance",goal:10},{id:"a2",title:"Needle Threader",desc:"Chain 5 near misses in one run.",type:"streakNearMiss",goal:5},{id:"a3",title:"Midnight Glow",desc:"Complete a night run with headlights on.",type:"nightHeadlights",goal:1},{id:"a4",title:"Interceptor Breaker",desc:"Escape a wanted level of 3.",type:"escapeWanted",goal:3}],zs=[{id:"engine",label:"Engine Upgrade",max:5,baseCost:1e3,effect:.08},{id:"turbo",label:"Turbo Upgrade",max:5,baseCost:1200,effect:.1},{id:"brakes",label:"Brake Upgrade",max:5,baseCost:800,effect:.08},{id:"tires",label:"Tire Upgrade",max:5,baseCost:850,effect:.07},{id:"suspension",label:"Suspension Upgrade",max:5,baseCost:850,effect:.06},{id:"nitro",label:"Nitro Upgrade",max:5,baseCost:1e3,effect:.12},{id:"weight",label:"Weight Reduction",max:5,baseCost:900,effect:.05},{id:"gearbox",label:"Gearbox Upgrade",max:5,baseCost:1050,effect:.06},{id:"ecu",label:"ECU Tuning",max:5,baseCost:1100,effect:.07},{id:"exhaust",label:"Exhaust Upgrade",max:5,baseCost:750,effect:.04},{id:"diff",label:"Differential Upgrade",max:5,baseCost:900,effect:.05}],Pl=[{id:"gearRatio",label:"Gear Ratio",min:.8,max:1.4,step:.01,default:1},{id:"suspensionStiffness",label:"Suspension Stiffness",min:.6,max:1.4,step:.01,default:1},{id:"rideHeight",label:"Ride Height",min:.8,max:1.2,step:.01,default:1},{id:"brakeBias",label:"Brake Bias",min:.4,max:.7,step:.01,default:.55},{id:"tireGrip",label:"Tire Grip",min:.8,max:1.4,step:.01,default:1},{id:"steeringSensitivity",label:"Steering Sensitivity",min:.7,max:1.6,step:.01,default:1},{id:"nitroPower",label:"Nitro Power",min:.8,max:1.5,step:.01,default:1},{id:"driftAssist",label:"Drift Assist",min:0,max:1,step:.01,default:.5},{id:"tractionControl",label:"Traction Control",min:0,max:1,step:1,default:1},{id:"abs",label:"ABS",min:0,max:1,step:1,default:1}],Ps={money:12500,level:1,xp:0,unlockedRoutes:3,selectedMode:"endless",upgrades:Object.fromEntries(zs.map(i=>[i.id,0])),tuning:Object.fromEntries(Pl.map(i=>[i.id,i.default])),customization:{paintColor:"#21a6ff",finishType:"gloss",wheelStyle:"sport",headlightColor:"#dff5ff",caliperColor:"#ff542d",interiorColor:"#101113",windowTint:.55},settings:{graphicsQuality:"high",cameraShake:.6,masterVolume:.8,musicVolume:.2,engineVolume:.85,ambienceVolume:.45,sfxVolume:.85,steerSensitivity:1,steeringFilter:.4,steerReturnSpeed:1.1,gamepadDeadzone:.14,autoHeadlights:!0,touchLayout:"split",gamepadEnabled:!0,showMap:!0},stats:{totalDistanceKm:0,totalNearMisses:0,totalRuns:0,bestScore:0,bestSpeed:0,totalMoneyEarned:0},missionProgress:Object.fromEntries(Oi.map(i=>[i.id,0])),achievements:Object.fromEntries(Rl.map(i=>[i.id,!1])),completedMissionRewards:[],dailyReward:{lastClaimDay:"",streak:0}},Kt={day:{skyTop:8373503,skyBottom:13625599,fog:11454686,ambient:16777215,sun:16773331,lightIntensity:1.15,wetness:0,rain:0,night:0},sunset:{skyTop:16747093,skyBottom:3886970,fog:9138029,ambient:16770506,sun:16751178,lightIntensity:.9,wetness:.06,rain:0,night:.25},night:{skyTop:991800,skyBottom:1256004,fog:1388874,ambient:11060735,sun:13098495,lightIntensity:.52,wetness:.15,rain:0,night:1},rain:{skyTop:6059407,skyBottom:2964553,fog:5794679,ambient:13490658,sun:15265527,lightIntensity:.78,wetness:.8,rain:1,night:.2},storm:{skyTop:3821669,skyBottom:2042677,fog:4411999,ambient:12638448,sun:14410996,lightIntensity:.68,wetness:1,rain:1.6,night:.35},fog:{skyTop:12831440,skyBottom:8358546,fog:12766416,ambient:15987699,sun:16777215,lightIntensity:.9,wetness:.2,rain:0,night:.15}},wr=(i,e,t)=>Math.min(t,Math.max(e,i));class cm{constructor(){this.ctx=null,this.started=!1,this.volume={master:.8,sfx:.85,music:.2,engine:.85,ambience:.45},this.master=null,this.engineBus=null,this.ambienceBus=null,this.musicBus=null,this.sfxBus=null,this.engine=null,this.siren=null,this.rain=null,this.horn=null,this.music=null,this.lastIndicatorPhase=!1,this.lastGear=1,this.sceneState={menu:!0,paused:!1,running:!1}}async start(){if(this.started){this.ctx?.state==="suspended"&&await this.ctx.resume();return}this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.engineBus=this.ctx.createGain(),this.ambienceBus=this.ctx.createGain(),this.musicBus=this.ctx.createGain(),this.sfxBus=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.engineBus.connect(this.master),this.ambienceBus.connect(this.master),this.musicBus.connect(this.master),this.sfxBus.connect(this.master),this.master.gain.value=this.volume.master,this.engine=this.createEngineRig(),this.siren=this.createSiren(),this.rain=this.createRainBus(),this.horn=this.createHorn(),this.music=this.createMusicBed(),this.applyVolumeTargets(),this.started=!0,this.setSceneState(this.sceneState)}createEngineRig(){const e=(h,T)=>{const E=this.ctx.createOscillator();return E.type=h,E.frequency.value=T,E.start(),E},t=e("sawtooth",42),n=e("triangle",94),s=e("sine",168),r=this.ctx.createGain(),a=this.ctx.createGain(),o=this.ctx.createGain();r.gain.value=.11,a.gain.value=.09,o.gain.value=.04;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=780,l.Q.value=1.8,t.connect(r).connect(l),n.connect(a).connect(l),s.connect(o).connect(this.engineBus),l.connect(this.engineBus);const c=this.createNoiseSource("white"),u=this.ctx.createBiquadFilter();u.type="bandpass",u.frequency.value=1100,u.Q.value=.7;const d=this.ctx.createGain();d.gain.value=.02,c.node.connect(u).connect(d).connect(this.engineBus);const f=this.createNoiseSource("pinkish"),m=this.ctx.createBiquadFilter();m.type="highpass",m.frequency.value=360;const g=this.ctx.createGain();g.gain.value=.01,f.node.connect(m).connect(g).connect(this.ambienceBus);const v=e("triangle",260),p=this.ctx.createGain();return p.gain.value=0,v.connect(p).connect(this.engineBus),{idle:t,mid:n,top:s,idleGain:r,midGain:a,topGain:o,toneFilter:l,intake:c,intakeFilter:u,intakeGain:d,road:f,roadFilter:m,roadGain:g,nitroOsc:v,nitroGain:p}}createNoiseSource(e="white"){const t=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate),n=t.getChannelData(0);let s=0;for(let a=0;a<n.length;a+=1){const o=Math.random()*2-1;e==="pinkish"?(s=.985*s+.15*o,n[a]=s):n[a]=o}const r=this.ctx.createBufferSource();return r.buffer=t,r.loop=!0,r.start(),{node:r}}createSiren(){const e=this.ctx.createOscillator();e.type="square",e.frequency.value=610;const t=this.ctx.createOscillator();t.type="triangle",t.frequency.value=760;const n=this.ctx.createGain();return n.gain.value=0,e.connect(n),t.connect(n),n.connect(this.sfxBus),e.start(),t.start(),{toneA:e,toneB:t,gain:n}}createRainBus(){const e=this.createNoiseSource("white"),t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.value=1e3,t.Q.value=.55;const n=this.ctx.createGain();return n.gain.value=0,e.node.connect(t).connect(n).connect(this.ambienceBus),{rain:e,filter:t,gain:n}}createHorn(){const e=this.ctx.createOscillator();e.type="square",e.frequency.value=392;const t=this.ctx.createOscillator();t.type="square",t.frequency.value=466;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=1450;const s=this.ctx.createGain();return s.gain.value=0,e.connect(n),t.connect(n),n.connect(s).connect(this.sfxBus),e.start(),t.start(),{low:e,high:t,gain:s}}createMusicBed(){const e=this.ctx.createOscillator();e.type="sine",e.frequency.value=86;const t=this.ctx.createOscillator();t.type="triangle",t.frequency.value=129;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=520;const s=this.ctx.createGain();return s.gain.value=0,e.connect(n),t.connect(n),n.connect(s).connect(this.musicBus),e.start(),t.start(),{pad:e,upper:t,gain:s}}applyVolumeTargets(){this.started&&this.master.gain.setTargetAtTime(this.volume.master,this.ctx.currentTime,.05)}setVolumes({masterVolume:e,sfxVolume:t,musicVolume:n,engineVolume:s=this.volume.engine,ambienceVolume:r=this.volume.ambience}){this.volume.master=e,this.volume.sfx=t,this.volume.music=n,this.volume.engine=s,this.volume.ambience=r,this.applyVolumeTargets(),this.setSceneState(this.sceneState)}setSceneState({menu:e=!1,paused:t=!1,running:n=!1}){if(this.sceneState={menu:e,paused:t,running:n},!this.started)return;const s=e?.05*this.volume.music:n?.012*this.volume.music:.02*this.volume.music,r=n?.22*this.volume.ambience:.08*this.volume.ambience,a=n?.36*this.volume.engine:e?.11*this.volume.engine:.18*this.volume.engine;this.music.gain.gain.setTargetAtTime(s,this.ctx.currentTime,.2),this.ambienceBus.gain.setTargetAtTime(r,this.ctx.currentTime,.16),this.engineBus.gain.setTargetAtTime(t?.08*this.volume.engine:a,this.ctx.currentTime,.14),this.sfxBus.gain.setTargetAtTime(t?.45*this.volume.sfx:this.volume.sfx,this.ctx.currentTime,.1)}playClick(e=1100,t=.05,n=.05){if(!this.started)return;const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="square",s.frequency.value=e,r.gain.value=t*this.volume.sfx,s.connect(r).connect(this.sfxBus),s.start(),r.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+n),s.stop(this.ctx.currentTime+n+.01)}playShift(e=1){if(!this.started)return;const t=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();t.type="triangle",t.frequency.value=e>0?220:180,s.type="bandpass",s.frequency.value=e>0?900:620,n.gain.value=.02*this.volume.engine,t.connect(s).connect(n).connect(this.engineBus),t.start(),t.frequency.exponentialRampToValueAtTime(e>0?340:120,this.ctx.currentTime+.08),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.1),t.stop(this.ctx.currentTime+.12)}updateEngine({speedKph:e,rpm:t,nitroActive:n,weatherRain:s,policeActive:r,throttle:a=0,brake:o=0,gear:l=1,hornActive:c=0,indicatorActive:u=!1,indicatorPhase:d=!1,skidAmount:f=0}){if(!this.started)return;const m=wr((t-900)/6500,0,1),g=wr(e/320,0,1),v=wr(a*.75+m*.4,0,1.25);this.engine.idle.frequency.setTargetAtTime(34+t*.011,this.ctx.currentTime,.06),this.engine.mid.frequency.setTargetAtTime(76+t*.023,this.ctx.currentTime,.05),this.engine.top.frequency.setTargetAtTime(120+t*.047,this.ctx.currentTime,.05),this.engine.idleGain.gain.setTargetAtTime((.08+m*.06)*this.volume.engine,this.ctx.currentTime,.08),this.engine.midGain.gain.setTargetAtTime((.06+v*.08)*this.volume.engine,this.ctx.currentTime,.08),this.engine.topGain.gain.setTargetAtTime((.02+m*.06)*this.volume.engine,this.ctx.currentTime,.07),this.engine.toneFilter.frequency.setTargetAtTime(520+m*2800+a*800,this.ctx.currentTime,.06),this.engine.intakeFilter.frequency.setTargetAtTime(700+m*3600,this.ctx.currentTime,.08),this.engine.intakeGain.gain.setTargetAtTime((.01+v*.03+n*.015)*this.volume.engine,this.ctx.currentTime,.08),this.engine.roadGain.gain.setTargetAtTime((.005+g*.04+f*.045)*this.volume.ambience,this.ctx.currentTime,.08),this.engine.roadFilter.frequency.setTargetAtTime(280+g*1100,this.ctx.currentTime,.08),this.engine.nitroOsc.frequency.setTargetAtTime(240+g*180,this.ctx.currentTime,.05),this.engine.nitroGain.gain.setTargetAtTime((n?.045:0)*this.volume.engine,this.ctx.currentTime,.05),this.horn.gain.gain.setTargetAtTime(c>0?.06*c*this.volume.sfx:0,this.ctx.currentTime,.04),this.horn.low.frequency.setTargetAtTime(392-o*20,this.ctx.currentTime,.05),this.horn.high.frequency.setTargetAtTime(466-o*24,this.ctx.currentTime,.05),u&&d&&!this.lastIndicatorPhase&&(this.playClick(1180,.04,.035),this.playClick(820,.018,.06)),this.lastIndicatorPhase=u&&d,l!==this.lastGear&&(this.playShift(l>this.lastGear?1:-1),this.lastGear=l);const p=(Math.sin(performance.now()*.012)+1)*.5;this.siren.gain.gain.setTargetAtTime(r?.03*this.volume.sfx:0,this.ctx.currentTime,.08),this.siren.toneA.frequency.setTargetAtTime(590+p*160,this.ctx.currentTime,.08),this.siren.toneB.frequency.setTargetAtTime(760-p*120,this.ctx.currentTime,.08),this.rain.filter.frequency.setTargetAtTime(700+s*650,this.ctx.currentTime,.12),this.rain.gain.gain.setTargetAtTime(s*.08*this.volume.ambience,this.ctx.currentTime,.18);const h=this.sceneState.menu?86:72+g*18;this.music.pad.frequency.setTargetAtTime(h,this.ctx.currentTime,.2),this.music.upper.frequency.setTargetAtTime(h*1.5,this.ctx.currentTime,.2)}pulseCrash(e=1){if(!this.started)return;const t=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();t.type="triangle",t.frequency.value=68,s.type="lowpass",s.frequency.value=180,n.gain.value=.13*e*this.volume.sfx,t.connect(s).connect(n).connect(this.sfxBus),t.start(),t.frequency.exponentialRampToValueAtTime(26,this.ctx.currentTime+.24),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.24),t.stop(this.ctx.currentTime+.28)}honk(){this.started&&this.playClick(540,.025,.02)}}const Xo={KeyW:"accelerate",ArrowUp:"accelerate",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"handbrake",ShiftLeft:"nitro",ShiftRight:"nitro",KeyC:"camera",KeyR:"reset",Escape:"pause",KeyM:"map",KeyH:"headlights",KeyQ:"signalLeft",KeyE:"signalRight",KeyF:"horn"};class hm{constructor({touchRoot:e}){this.state={accelerate:0,brake:0,left:0,right:0,handbrake:0,nitro:0,horn:0},this.actions=[],this.touchRoot=e,this.gamepadEnabled=!0,this.gamepadDeadzone=.14,this.pointerMap=new Map,this.lastGamepadButtons={camera:!1,pause:!1}}bind(){if(window.addEventListener("keydown",e=>{const t=Xo[e.code];t&&(this.isFormTarget(e.target)&&t!=="pause"||(e.preventDefault(),["camera","reset","pause","map","headlights","signalLeft","signalRight"].includes(t)?e.repeat||this.actions.push(t):this.state[t]=1))}),window.addEventListener("keyup",e=>{const t=Xo[e.code];t&&(this.isFormTarget(e.target)&&t!=="pause"||(e.preventDefault(),this.state[t]!==void 0&&(this.state[t]=0)))}),this.touchRoot)for(const e of this.touchRoot.querySelectorAll("button[data-action]")){e.addEventListener("pointerdown",n=>{n.preventDefault();const s=n.currentTarget.dataset.action;this.pointerMap.set(n.pointerId,s),this.state[s]!==void 0&&(this.state[s]=1)});const t=n=>{const s=this.pointerMap.get(n.pointerId);s&&this.state[s]!==void 0&&(this.state[s]=0),this.pointerMap.delete(n.pointerId)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("pointerleave",t)}}consumeActions(){const e=[...this.actions];return this.actions.length=0,e}isFormTarget(e){return!!(e&&(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"||e.isContentEditable))}pollGamepad(){if(!this.gamepadEnabled||!navigator.getGamepads)return;const e=[...navigator.getGamepads()].find(Boolean);if(!e)return;const t=e.axes[0]||0,n=this.gamepadDeadzone,s=Math.abs(t)<=n?0:(Math.abs(t)-n)/(1-n)*Math.sign(t);this.state.left=Math.max(0,-s),this.state.right=Math.max(0,s),this.state.accelerate=e.buttons[7]?.value??e.buttons[0]?.value??this.state.accelerate,this.state.brake=e.buttons[6]?.value??e.buttons[1]?.value??this.state.brake,this.state.handbrake=e.buttons[2]?.value??0,this.state.nitro=e.buttons[5]?.value??0,this.state.horn=e.buttons[4]?.value??0;const r=!!e.buttons[3]?.pressed,a=!!e.buttons[9]?.pressed;r&&!this.lastGamepadButtons.camera&&this.actions.push("camera"),a&&!this.lastGamepadButtons.pause&&this.actions.push("pause"),this.lastGamepadButtons.camera=r,this.lastGamepadButtons.pause=a}}const Dl=`${Ia}-leaderboard`,Ll=100;function Il(i,e){const t=structuredClone(i);for(const n of Object.keys(e||{})){const s=e[n],r=t[n];s&&typeof s=="object"&&!Array.isArray(s)?t[n]=Il(r??{},s):s!==void 0&&(t[n]=s)}return t}function um(){try{const i=localStorage.getItem(Ia);if(!i)return structuredClone(Ps);const e=JSON.parse(i);return Il(Ps,e)}catch(i){return console.warn("Failed to load save data, restoring defaults.",i),structuredClone(Ps)}}function Qt(i){localStorage.setItem(Ia,JSON.stringify(i))}function dm(i){const e=structuredClone(i);return e.tuning=structuredClone(Ps.tuning),e}function Ua(i){return{id:String(i.id??`${Date.now()}-${Math.random().toString(16).slice(2)}`),nickname:String(i.nickname??"Driver").trim().slice(0,18)||"Driver",modeId:String(i.modeId??"endless"),modeName:String(i.modeName??"Endless Traffic"),score:Math.max(0,Math.round(Number(i.score)||0)),distanceKm:Math.max(0,Number(i.distanceKm)||0),topSpeed:Math.max(0,Math.round(Number(i.topSpeed)||0)),nearMisses:Math.max(0,Math.round(Number(i.nearMisses)||0)),bestCombo:Math.max(1,Number(i.bestCombo)||1),createdAt:String(i.createdAt??new Date().toISOString())}}function Ul(){try{const i=localStorage.getItem(Dl);if(!i)return[];const e=JSON.parse(i);return Array.isArray(e)?e.map(Ua).sort((t,n)=>n.score-t.score).slice(0,Ll):[]}catch(i){return console.warn("Failed to load leaderboard data.",i),[]}}function fm(i){const e=i.map(Ua).sort((t,n)=>n.score-t.score).slice(0,Ll);return localStorage.setItem(Dl,JSON.stringify(e)),e}function pm(i){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`,t=Ua({...i,id:e}),n=fm([...Ul(),t]);return{entries:n,rank:n.findIndex(s=>s.id===e)+1}}function wn(i){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Math.round(i))}function qo(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}class mm{constructor(e){this.saveData=e,this.selectedModeId=e.selectedMode,this.modeCards=new Map,this.events=[],this.leaderboardEntries=[],this.el={loadingScreen:document.getElementById("loading-screen"),loadingBar:document.getElementById("loading-bar"),loadingText:document.getElementById("loading-text"),menuRoot:document.getElementById("menu-root"),hud:document.getElementById("hud"),pauseMenu:document.getElementById("pause-menu"),resultsScreen:document.getElementById("results-screen"),resultsTitle:document.getElementById("results-title"),resultsGrid:document.getElementById("results-grid"),nicknameScreen:document.getElementById("nickname-screen"),nicknameMode:document.getElementById("nickname-mode"),nicknameInput:document.getElementById("nickname-input"),nicknameStartBtn:document.getElementById("nickname-start-btn"),nicknameCancelBtn:document.getElementById("nickname-cancel-btn"),touchControls:document.getElementById("touch-controls"),windshieldRain:document.getElementById("windshield-rain"),windshieldCrack:document.getElementById("windshield-crack"),cockpitOverlay:document.getElementById("cockpit-overlay"),eventFeed:document.getElementById("event-feed"),miniMap:document.getElementById("mini-map"),navLinks:[...document.querySelectorAll(".nav-link")],screens:[...document.querySelectorAll(".screen")],modeGrid:document.getElementById("mode-grid"),selectedModeName:document.getElementById("selected-mode-name"),selectedModeDesc:document.getElementById("selected-mode-desc"),startRunBtn:document.getElementById("start-run-btn"),dailyRewardBtn:document.getElementById("daily-reward-btn"),profileLevel:document.getElementById("profile-level"),profileMoney:document.getElementById("profile-money"),unlockedRoutes:document.getElementById("unlocked-routes"),upgradeList:document.getElementById("upgrade-list"),tuningList:document.getElementById("tuning-list"),missionList:document.getElementById("mission-list"),achievementList:document.getElementById("achievement-list"),leaderboardList:document.getElementById("leaderboard-list"),applySettingsBtn:document.getElementById("apply-settings-btn"),garageResetBtn:document.getElementById("garage-reset-btn"),resultsRetryBtn:document.getElementById("results-retry-btn"),resultsGarageBtn:document.getElementById("results-garage-btn"),resumeBtn:document.getElementById("resume-btn"),pauseSettingsBtn:document.getElementById("pause-settings-btn"),quitRunBtn:document.getElementById("quit-run-btn"),hudMode:document.getElementById("hud-mode"),hudObjective:document.getElementById("hud-objective"),hudCamera:document.getElementById("hud-camera"),hudWanted:document.getElementById("hud-wanted"),hudSpeed:document.getElementById("hud-speed"),hudRpm:document.getElementById("hud-rpm"),hudGear:document.getElementById("hud-gear"),hudScore:document.getElementById("hud-score"),hudCombo:document.getElementById("hud-combo"),hudMoney:document.getElementById("hud-money"),hudDistance:document.getElementById("hud-distance"),hudTopSpeed:document.getElementById("hud-top-speed"),nitroBar:document.getElementById("nitro-bar"),damageBar:document.getElementById("damage-bar"),comboBar:document.getElementById("combo-bar"),paintColor:document.getElementById("paint-color"),finishType:document.getElementById("finish-type"),wheelStyle:document.getElementById("wheel-style"),headlightColor:document.getElementById("headlight-color"),caliperColor:document.getElementById("caliper-color"),interiorColor:document.getElementById("interior-color"),windowTint:document.getElementById("window-tint"),graphicsQuality:document.getElementById("graphics-quality"),cameraShake:document.getElementById("camera-shake"),showMap:document.getElementById("show-map"),masterVolume:document.getElementById("master-volume"),engineVolume:document.getElementById("engine-volume"),ambienceVolume:document.getElementById("ambience-volume"),musicVolume:document.getElementById("music-volume"),sfxVolume:document.getElementById("sfx-volume"),steerSensitivity:document.getElementById("steer-sensitivity"),steeringFilter:document.getElementById("steering-filter"),steerReturnSpeed:document.getElementById("steer-return-speed"),gamepadDeadzone:document.getElementById("gamepad-deadzone"),touchLayout:document.getElementById("touch-layout"),gamepadEnabled:document.getElementById("gamepad-enabled"),autoHeadlights:document.getElementById("auto-headlights"),closeSettingsBtn:document.getElementById("close-settings-btn")},this.refreshFromSave(e),this.renderModeCards(),this.renderUpgradeCards(),this.renderTuningControls(),this.renderMissions(),this.renderAchievements(),this.bindNavigation()}setLoading(e,t){this.el.loadingBar.style.width=`${Math.max(2,e*100)}%`,this.el.loadingText.textContent=t}finishLoading(){this.el.loadingScreen.classList.add("hidden")}bindNavigation(){this.el.navLinks.forEach(e=>{e.addEventListener("click",()=>this.showScreen(e.dataset.screen))})}promptNickname(e){return new Promise(t=>{const n=this.el.nicknameScreen,s=this.el.nicknameInput,r=this.el.nicknameStartBtn,a=this.el.nicknameCancelBtn,o=()=>{n.classList.add("hidden"),s.removeEventListener("input",c),s.removeEventListener("keydown",f),r.removeEventListener("click",u),a.removeEventListener("click",d)},l=()=>s.value.trim().replace(/\s+/g," ").slice(0,18),c=()=>{r.disabled=l().length===0},u=()=>{const m=l();if(!m){s.focus();return}o(),t(m)},d=()=>{o(),t(null)},f=m=>{m.key==="Enter"&&u(),m.key==="Escape"&&d()};this.el.nicknameMode.textContent=e,s.value="",r.disabled=!0,n.classList.remove("hidden"),s.addEventListener("input",c),s.addEventListener("keydown",f),r.addEventListener("click",u),a.addEventListener("click",d),requestAnimationFrame(()=>s.focus())})}showScreen(e){this.el.navLinks.forEach(t=>t.classList.toggle("active",t.dataset.screen===e)),this.el.screens.forEach(t=>t.classList.toggle("active",t.id===e))}renderModeCards(){this.el.modeGrid.innerHTML="",this.modeCards.clear();for(const t of xi){const n=document.createElement("button");n.className="mode-card",t.id===this.selectedModeId&&n.classList.add("selected"),n.innerHTML=`
        <div>
          <span class="eyebrow">${t.weather}</span>
          <h3>${t.name}</h3>
          <p>${t.desc}</p>
        </div>
        <div class="mode-meta">
          <span class="chip">${t.trafficFlow}</span>
          <span class="chip">${t.police?"police":"traffic"}</span>
          <span class="chip">${t.reward.toFixed(2)}x reward</span>
        </div>
      `,n.addEventListener("click",()=>{this.selectedModeId=t.id,this.el.selectedModeName.textContent=t.name,this.el.selectedModeDesc.textContent=t.desc,this.modeCards.forEach((s,r)=>s.classList.toggle("selected",r===t.id))}),this.modeCards.set(t.id,n),this.el.modeGrid.append(n)}const e=xi.find(t=>t.id===this.selectedModeId)??xi[0];this.el.selectedModeName.textContent=e.name,this.el.selectedModeDesc.textContent=e.desc}renderUpgradeCards(){this.el.upgradeList.innerHTML="";for(const e of zs){const t=this.saveData.upgrades[e.id],n=this.getUpgradeCost(e.id),s=document.createElement("article");s.className="upgrade-card",s.innerHTML=`
        <header>
          <div>
            <strong>${e.label}</strong>
            <div class="label">Level ${t}/${e.max}</div>
          </div>
          <strong>${n>0?`${wn(n)} cr`:"Maxed"}</strong>
        </header>
        <footer>
          <span class="chip">+${Math.round(e.effect*100)}% per level</span>
          <button class="secondary" ${t>=e.max?"disabled":""}>Upgrade</button>
        </footer>
      `,s.querySelector("button")?.addEventListener("click",()=>this.onUpgrade?.(e.id)),this.el.upgradeList.append(s)}}renderTuningControls(){this.el.tuningList.innerHTML="";for(const e of Pl){const t=document.createElement("div");t.className="control-group";const n=this.saveData.tuning[e.id];t.innerHTML=`
        <label for="tune-${e.id}">${e.label}</label>
        <input id="tune-${e.id}" type="range" min="${e.min}" max="${e.max}" step="${e.step}" value="${n}" />
        <span class="chip">${n}</span>
      `;const s=t.querySelector("input"),r=t.querySelector(".chip");s.addEventListener("input",()=>{r.textContent=s.value,this.onTuneChange?.(e.id,Number(s.value))}),this.el.tuningList.append(t)}}renderMissions(){this.el.missionList.innerHTML="";for(const e of Oi){const t=this.saveData.missionProgress[e.id],n=t>=e.goal,s=document.createElement("article");s.className="mission-card",s.innerHTML=`
        <header>
          <div>
            <strong>${e.title}</strong>
            <div class="label">${e.reward} credits</div>
          </div>
          <span class="chip">${n?"Complete":`${t}/${e.goal}`}</span>
        </header>
        <footer>
          <div class="bar-track"><div class="bar-fill combo" style="width:${Math.min(100,t/e.goal*100)}%"></div></div>
        </footer>
      `,this.el.missionList.append(s)}}renderAchievements(){this.el.achievementList.innerHTML="";for(const e of Rl){const t=this.saveData.achievements[e.id],n=document.createElement("article");n.className="achievement-card",n.innerHTML=`
        <header>
          <div>
            <strong>${e.title}</strong>
            <div class="label">${e.desc}</div>
          </div>
          <span class="chip">${t?"Unlocked":"Locked"}</span>
        </header>
      `,this.el.achievementList.append(n)}}renderLeaderboard(e=this.leaderboardEntries){if(this.leaderboardEntries=e,!!this.el.leaderboardList){if(this.el.leaderboardList.innerHTML="",!e.length){const t=document.createElement("div");t.className="leaderboard-empty",t.textContent="No local scores yet.",this.el.leaderboardList.append(t);return}e.slice(0,12).forEach((t,n)=>{const s=document.createElement("article");s.className="leaderboard-row";const r=t.createdAt?new Date(t.createdAt).toLocaleDateString(void 0,{month:"short",day:"numeric"}):"";s.innerHTML=`
        <div class="leaderboard-rank">${n+1}</div>
        <div class="leaderboard-main">
          <strong>${qo(t.nickname)}</strong>
          <span>${qo(t.modeName)} · ${r}</span>
        </div>
        <div class="leaderboard-score">
          <strong>${wn(t.score)}</strong>
          <span>${Math.round(t.topSpeed)} km/h · ${t.distanceKm.toFixed(2)} km</span>
        </div>
      `,this.el.leaderboardList.append(s)})}}refreshFromSave(e){this.saveData=e,this.el.profileLevel.textContent=e.level,this.el.profileMoney.textContent=`${wn(e.money)} cr`,this.el.unlockedRoutes.textContent=e.unlockedRoutes,this.el.paintColor.value=e.customization.paintColor,this.el.finishType.value=e.customization.finishType,this.el.wheelStyle.value=e.customization.wheelStyle,this.el.headlightColor.value=e.customization.headlightColor,this.el.caliperColor.value=e.customization.caliperColor,this.el.interiorColor.value=e.customization.interiorColor,this.el.windowTint.value=e.customization.windowTint,this.el.graphicsQuality.value=e.settings.graphicsQuality,this.el.cameraShake.value=e.settings.cameraShake,this.el.showMap.value=e.settings.showMap?"on":"off",this.el.masterVolume.value=e.settings.masterVolume,this.el.engineVolume.value=e.settings.engineVolume,this.el.ambienceVolume.value=e.settings.ambienceVolume,this.el.musicVolume.value=e.settings.musicVolume,this.el.sfxVolume.value=e.settings.sfxVolume,this.el.steerSensitivity.value=e.settings.steerSensitivity,this.el.steeringFilter.value=e.settings.steeringFilter,this.el.steerReturnSpeed.value=e.settings.steerReturnSpeed,this.el.gamepadDeadzone.value=e.settings.gamepadDeadzone,this.el.touchLayout.value=e.settings.touchLayout,this.el.gamepadEnabled.value=e.settings.gamepadEnabled?"on":"off",this.el.autoHeadlights.value=e.settings.autoHeadlights?"on":"off"}bindGarageHandlers({onUpgrade:e,onTuneChange:t,onResetTuning:n,onCustomizationChange:s}){this.onUpgrade=e,this.onTuneChange=t,this.el.garageResetBtn.addEventListener("click",()=>n?.()),["paintColor","finishType","wheelStyle","headlightColor","caliperColor","interiorColor","windowTint"].forEach(r=>{this.el[r].addEventListener("input",()=>{s?.({paintColor:this.el.paintColor.value,finishType:this.el.finishType.value,wheelStyle:this.el.wheelStyle.value,headlightColor:this.el.headlightColor.value,caliperColor:this.el.caliperColor.value,interiorColor:this.el.interiorColor.value,windowTint:Number(this.el.windowTint.value)})})})}bindSettingsHandlers(e){this.el.applySettingsBtn.addEventListener("click",()=>{e?.({graphicsQuality:this.el.graphicsQuality.value,cameraShake:Number(this.el.cameraShake.value),showMap:this.el.showMap.value==="on",masterVolume:Number(this.el.masterVolume.value),engineVolume:Number(this.el.engineVolume.value),ambienceVolume:Number(this.el.ambienceVolume.value),musicVolume:Number(this.el.musicVolume.value),sfxVolume:Number(this.el.sfxVolume.value),steerSensitivity:Number(this.el.steerSensitivity.value),steeringFilter:Number(this.el.steeringFilter.value),steerReturnSpeed:Number(this.el.steerReturnSpeed.value),gamepadDeadzone:Number(this.el.gamepadDeadzone.value),touchLayout:this.el.touchLayout.value,gamepadEnabled:this.el.gamepadEnabled.value==="on",autoHeadlights:this.el.autoHeadlights.value==="on"})})}bindMenus({onStartRun:e,onDailyReward:t,onResume:n,onPauseSettings:s,onQuitRun:r,onRetry:a,onResultsGarage:o,onCloseSettings:l}){this.el.startRunBtn.addEventListener("click",()=>e?.(this.selectedModeId)),this.el.dailyRewardBtn.addEventListener("click",()=>t?.()),this.el.resumeBtn.addEventListener("click",()=>n?.()),this.el.pauseSettingsBtn.addEventListener("click",()=>s?.()),this.el.quitRunBtn.addEventListener("click",()=>r?.()),this.el.resultsRetryBtn.addEventListener("click",()=>a?.()),this.el.resultsGarageBtn.addEventListener("click",()=>o?.()),this.el.closeSettingsBtn.addEventListener("click",()=>l?.())}getUpgradeCost(e){const t=zs.find(s=>s.id===e),n=this.saveData.upgrades[e];return!t||n>=t.max?0:Math.round(t.baseCost*(1+n*.55))}toggleMenu(e){this.el.menuRoot.classList.toggle("hidden",!e)}toggleHUD(e){this.el.hud.classList.toggle("hidden",!e)}togglePause(e){this.el.pauseMenu.classList.toggle("hidden",!e)}toggleResults(e){this.el.resultsScreen.classList.toggle("hidden",!e)}toggleCockpit(e,t=0,n=0){this.el.cockpitOverlay.classList.toggle("hidden",!e),this.el.windshieldRain.style.opacity=`${t}`,this.el.windshieldCrack.style.opacity=`${n}`}toggleTouchControls(e){this.el.touchControls.classList.toggle("hidden",!e)}setPauseSettingsOpen(e){this.el.closeSettingsBtn.classList.toggle("hidden",!e)}setHUD(e){this.el.hudMode.textContent=e.modeName,this.el.hudObjective.textContent=e.objective,this.el.hudCamera.textContent=e.cameraName,this.el.hudWanted.textContent=String(e.wantedLevel),this.el.hudSpeed.textContent=String(Math.round(e.speed)),this.el.hudRpm.textContent=String(Math.round(e.rpm)),this.el.hudGear.textContent=String(e.gear),this.el.hudScore.textContent=wn(e.score),this.el.hudCombo.textContent=`${e.combo.toFixed(1)}x`,this.el.hudMoney.textContent=`${wn(e.money)} cr`,this.el.hudDistance.textContent=`${e.distance.toFixed(2)} km`,this.el.hudTopSpeed.textContent=`${Math.round(e.topSpeed)} km/h`,this.el.nitroBar.style.width=`${e.nitro*100}%`,this.el.damageBar.style.width=`${e.damage*100}%`,this.el.comboBar.style.width=`${e.comboTimer*100}%`}addEvent(e){this.events.unshift(e),this.events=this.events.slice(0,8),this.el.eventFeed.innerHTML=this.events.map(t=>`<div class="event-item">${t}</div>`).join("")}drawMiniMap(e,t,n,s){if(this.el.miniMap.classList.toggle("hidden",!s),!s)return;const r=this.el.miniMap.getContext("2d"),{width:a,height:o}=this.el.miniMap,l=e.laneWidth||4.2;r.clearRect(0,0,a,o),r.fillStyle="rgba(3, 10, 18, 0.86)",r.fillRect(0,0,a,o);const c=a/6;r.strokeStyle="rgba(255,255,255,0.18)",r.lineWidth=2;for(let p=1;p<6;p+=1)r.beginPath(),r.moveTo(p*c,0),r.lineTo(p*c,o),r.stroke();const u=o*.72,d=[...t,...n],f=Math.max(260,...d.map(p=>p.z-e.z+24)),m=Math.max(140,...d.map(p=>e.z-p.z+24)),g=p=>{const h=p/l;return Math.min(a-8,Math.max(8,a/2+h*c))},v=p=>{const h=p-e.z;return h>=0?u-Math.min(1,h/f)*(u-12):u+Math.min(1,-h/m)*(o-u-12)};r.strokeStyle="rgba(109,233,255,0.34)",r.beginPath(),r.moveTo(0,u),r.lineTo(a,u),r.stroke(),r.fillStyle="#6de9ff",r.shadowColor="rgba(109,233,255,0.8)",r.shadowBlur=10,r.fillRect(g(e.x)-5,u-10,10,18),r.shadowBlur=0,t.forEach(p=>{const h=v(p.z),T=g(p.laneX);r.fillStyle=p.isOncoming?"#ff916c":"#ffffff",r.fillRect(T-4,h-7,8,14)}),n.forEach(p=>{const h=v(p.z),T=g(p.laneX);r.fillStyle="#4ca3ff",r.shadowColor="rgba(76,163,255,0.75)",r.shadowBlur=8,r.fillRect(T-5,h-8,10,16),r.shadowBlur=0})}showResults(e){this.el.resultsTitle.textContent=e.title,this.el.resultsGrid.innerHTML="",[["Driver",e.nickname??"Driver"],["Leaderboard",e.leaderboardRank?`#${e.leaderboardRank} local`:"Not recorded"],["Score",wn(e.score)],["Distance",`${e.distance.toFixed(2)} km`],["Top Speed",`${Math.round(e.topSpeed)} km/h`],["Near Misses",e.nearMisses],["Average Speed",`${Math.round(e.averageSpeed)} km/h`],["Combo Peak",`${e.bestCombo.toFixed(1)}x`],["Repair Cost",`${wn(e.repairCost)} cr`],["Credits Earned",`${wn(e.moneyEarned)} cr`]].forEach(([t,n])=>{const s=document.createElement("div");s.className="results-row";const r=document.createElement("span");r.textContent=t;const a=document.createElement("strong");a.textContent=n,s.append(r,a),this.el.resultsGrid.append(s)})}}const gm=i=>Math.min(1,Math.max(0,i));function Nl(i=.55){const e=gm(Number(i));return{color:new oe(12578559).lerp(new oe(329999),e*.78),opacity:.52+e*.34,transmission:Math.max(.03,.24-e*.18)}}function Yo(i,e=.55,t=!1){const n=Nl(e);i.color.copy(n.color),i.opacity=t?Math.min(n.opacity,.22):n.opacity,i.transmission=n.transmission,i.needsUpdate=!0}function Ds(i,e,t="sport",n="#ff542d"){const s=new xt,r=new de(new Yn(i,i,e,20),new st({color:1118481,roughness:.9,metalness:.1}));r.rotation.z=Math.PI/2,r.castShadow=!0,r.receiveShadow=!0,s.add(r);const a=new Yn(i*.65,i*.65,e*.7,10),o=new st({color:t==="mesh"?12042960:t==="track"?2960685:4541526,roughness:.38,metalness:.9}),l=new de(a,o);l.rotation.z=Math.PI/2,s.add(l);const c=new de(new Ae(e*.18,i*.65,i*.18),new st({color:new oe(n),roughness:.35,metalness:.35}));return c.position.set(0,.15,i*.18),s.add(c),s}function Gn(i,e,t,n,s=1.8){const r=new st({color:new oe(i),emissive:new oe(i),emissiveIntensity:s,roughness:.08,metalness:.1});return new de(new Ae(e,t,n),r)}function _m(i={}){const e=new xt;e.name="playerCar";const t=i.paintColor??"#3c435a",n=i.finishType??"gloss",s=i.headlightColor??"#dff5ff",r=i.interiorColor??"#101113",a=i.caliperColor??"#ff542d",o=i.windowTint??.55,l=i.wheelStyle??"sport",c={matte:{roughness:.7,metalness:.25},gloss:{roughness:.28,metalness:.6},metallic:{roughness:.22,metalness:.82},pearl:{roughness:.15,metalness:.7},chrome:{roughness:.08,metalness:1},carbon:{roughness:.45,metalness:.52}},u=new mo({color:new oe(t),emissive:new oe(t).multiplyScalar(.08),emissiveIntensity:.35,clearcoat:1,clearcoatRoughness:n==="matte"?.45:.06,reflectivity:1,...c[n]});u.userData.baseClearcoatRoughness=u.clearcoatRoughness;const d=new st({color:1250328,roughness:.86,metalness:.25}),f=Nl(o),m=new mo({color:f.color,transparent:!0,opacity:f.opacity,roughness:.05,metalness:.1,transmission:f.transmission,thickness:.08}),g=new de(new Ae(2.08,.48,4.9),u);g.position.y=.65,g.castShadow=!0,g.receiveShadow=!0,e.add(g);const v=new de(new Ae(2.18,.18,4.55),d);v.position.y=.39,v.castShadow=!0,e.add(v);const p=new de(new Ae(1.84,.18,1.55),u);p.position.set(0,.87,1.13),p.rotation.x=-.09,p.castShadow=!0,e.add(p);const h=new de(new Ae(1.68,.2,1.7),u);h.position.set(0,1.38,-.15),h.castShadow=!0,e.add(h);const T=new de(new Ae(1.78,.56,2.15),m);T.position.set(0,1.1,-.08),T.castShadow=!0,e.add(T);const E=new de(new Ae(1.8,.16,1.15),u);E.position.set(0,.96,-1.8),E.rotation.x=.06,E.castShadow=!0,e.add(E);const y=new de(new Ae(2.05,.42,.58),d);y.position.set(0,.48,2.42),y.castShadow=!0,e.add(y);const D=new de(new Ae(2.02,.42,.6),d);D.position.set(0,.49,-2.4),D.castShadow=!0,e.add(D);const C=new de(new Ae(.33,.24,.08),d);C.position.set(-.23,.76,2.46),e.add(C);const w=C.clone();w.position.x*=-1,e.add(w);const I=new de(new Ae(1.8,.05,.46),d);I.position.set(0,.27,2.43),e.add(I);const S=new de(new Ae(1.25,.06,.4),d);S.position.set(0,1.1,-2.38),e.add(S);const M=new de(new Ae(.08,.14,.08),d);M.position.set(-.35,.98,-2.3),e.add(M);const R=M.clone();R.position.x*=-1,e.add(R);const k=new de(new Ae(1.5,.08,.3),d);k.position.set(0,.3,-2.46),e.add(k);const B=new de(new Yn(.07,.07,.26,12),new st({color:8948882,roughness:.3,metalness:.95}));B.rotation.x=Math.PI/2,B.position.set(-.42,.35,-2.57),e.add(B);const W=B.clone();W.position.x*=-1,e.add(W);const Y=Gn(s,.38,.1,.08,2.2);Y.position.set(-.68,.84,2.35),e.add(Y);const G=Y.clone();G.position.x*=-1,e.add(G);const Z=Gn("#ffb347",.14,.08,.06,.2);Z.position.set(-.93,.78,2.34),e.add(Z);const V=Z.clone();V.position.x*=-1,e.add(V);const ie=Gn("#ff3e3e",.48,.1,.08,2.4);ie.position.set(-.62,.84,-2.35),e.add(ie);const ue=ie.clone();ue.position.x*=-1,e.add(ue);const xe=Gn("#ff914d",.13,.08,.06,.2);xe.position.set(-.93,.78,-2.34),e.add(xe);const Oe=xe.clone();Oe.position.x*=-1,e.add(Oe);const Ye=Gn("#f1fbff",.12,.08,.06,.12);Ye.position.set(-.17,.78,-2.34),e.add(Ye);const X=Ye.clone();X.position.x*=-1,e.add(X);const ee=new xt,Me=new de(new Ae(1.7,.2,.72),new st({color:new oe(r),roughness:.85,metalness:.08}));Me.position.set(0,1,.82),ee.add(Me);const le=new de(new Ae(.6,.14,.12),new st({color:529183,emissive:1062994,emissiveIntensity:1.1}));le.position.set(-.33,1.06,.72),ee.add(le);const Se=new de(new Ae(.34,.18,.05),new st({color:529954,emissive:1947647,emissiveIntensity:.9}));Se.position.set(.25,1.06,.74),ee.add(Se);const qe=new st({color:new oe(r).offsetHSL(0,0,.08),roughness:.95,metalness:.02}),Ce=new de(new Ae(.54,.5,.6),qe);Ce.position.set(-.42,.88,-.25),ee.add(Ce);const at=Ce.clone();at.position.x*=-1,ee.add(at);const tt=new de(new Ca(.19,.028,12,30),new st({color:1974049,roughness:.55,metalness:.32}));tt.position.set(-.45,1.03,.52),tt.rotation.set(.7,0,.18),ee.add(tt);const He=new rt;He.position.set(-.33,1.13,.48),ee.add(He);const A=new rt;A.position.set(-.25,1,5.8),ee.add(A);const mt=new rt;mt.position.set(0,1.01,1.78),e.add(mt);const Ge=new rt;Ge.position.set(0,.9,7.1),e.add(Ge);const Ze=new rt;Ze.position.set(0,1.32,-1.1),e.add(Ze),e.add(ee);const Xe=[[-.93,.46,1.45],[.93,.46,1.45],[-.93,.46,-1.52],[.93,.46,-1.52]].map(([ft,b,_])=>{const F=Ds(.39,.32,l,a);return F.position.set(ft,b,_),e.add(F),F}),we=[ie,ue],Be=[Y,G];return e.userData={size:{width:2.12,length:4.95,height:1.58},paintMaterial:u,glassMaterial:m,headLights:Be,brakeLights:we,wheels:Xe,steeringWheel:tt,interior:ee,cameraAnchors:{cockpitAnchor:He,cockpitLookTarget:A,hoodAnchor:mt,hoodLookTarget:Ge,chaseAnchor:Ze},indicators:{frontLeft:Z,frontRight:V,rearLeft:xe,rearRight:Oe,reverseLeft:Ye,reverseRight:X},headlightColor:s,damageParts:{frontBumper:y,rearBumper:D,headlightL:Y,headlightR:G,greenhouse:T}},e}function vm(i){return new st({color:i,emissive:new oe(i).multiplyScalar(.035),emissiveIntensity:.5,roughness:.36,metalness:.72})}function ga(i="car",e={}){const t=new xt;t.name=`traffic-${i}`;const n=e.colorPalette??[16120063,6478335,16738125,16761933,8647311,12158975,10135738],s=n[Math.floor(Math.random()*n.length)],r=vm(s),a=new st({color:1382172,roughness:.8,metalness:.35}),o=(l,c,u,d)=>{const f=Gn("#dff2ff",u,d,.05,1.4);f.position.set(-.45,.72,l),t.add(f);const m=f.clone();m.position.x*=-1,t.add(m);const g=Gn("#ff3d4e",u+.05,d,.05,1.8);g.position.set(-.45,.72,c),t.add(g);const v=g.clone();v.position.x*=-1,t.add(v),t.userData.headlights=[f,m],t.userData.brakelights=[g,v]};if(i==="motorcycle"){const l=new de(new Ae(.45,.25,1.25),r);l.position.y=.5,l.castShadow=!0,t.add(l);const c=new de(new Ae(.28,.46,.28),a);c.position.set(0,.9,-.1),t.add(c);const u=Ds(.23,.12,"track","#ff8233");u.position.set(0,.3,.42),t.add(u);const d=Ds(.23,.14,"track","#ff8233");d.position.set(0,.3,-.46),t.add(d),o(.65,-.64,.08,.08),t.userData.size={width:.7,length:1.5,height:1.2}}else if(i==="van"){const l=new de(new Ae(1.9,1.45,4.2),r);l.position.y=1,l.castShadow=!0,t.add(l);const c=new de(new Ae(1.75,.85,1.2),a);c.position.set(0,1.4,1),t.add(c),o(2.06,-2.06,.28,.1),t.userData.size={width:2,length:4.3,height:2.2}}else if(i==="bus"){const l=new de(new Ae(2.35,1.85,7.5),r);l.position.y=1.25,l.castShadow=!0,t.add(l);const c=new de(new Ae(2.2,.16,7.15),a);c.position.set(0,.85,0),t.add(c),o(3.72,-3.72,.32,.12),t.userData.size={width:2.45,length:7.6,height:2.7}}else if(i==="truck"){const l=new de(new Ae(2.55,2.15,7.1),r);l.position.set(0,1.45,-.7),l.castShadow=!0,t.add(l);const c=new de(new Ae(2.2,1.7,2),a);c.position.set(0,1.2,3),c.castShadow=!0,t.add(c),o(4,-4.1,.35,.12),t.userData.size={width:2.6,length:8.6,height:3.2}}else if(i==="police"){const l=ga("car",e);l.userData.isPolice=!0;const c=new de(new Ae(.7,.12,.16),new st({color:14544639,emissive:9425151,emissiveIntensity:2.5}));return c.position.set(0,1.55,-.1),l.add(c),l.userData.lightBar=c,l}else{const l=new de(new Ae(1.95,.55,4.35),r);l.position.y=.62,l.castShadow=!0,t.add(l);const c=new de(new Ae(1.65,.5,1.7),a);c.position.set(0,1.07,-.2),t.add(c);const u=new de(new Ae(1.9,.32,.45),a);u.position.set(0,.4,2.1),t.add(u);const d=new de(new Ae(1.9,.32,.45),a);d.position.set(0,.4,-2.1),t.add(d),o(2.1,-2.1,.26,.1),t.userData.size={width:2,length:4.45,height:1.6}}if(i!=="motorcycle"){const l=t.userData.size,c=l.length*.32,u=l.width*.44,d=Math.max(.26,Math.min(.42,l.height*.18)),f=Ds(d,.24,e.wheelStyle??"sport","#ff6b35");f.position.set(-u,d+.05,c),t.add(f);const m=f.clone();m.position.x*=-1,t.add(m);const g=f.clone();g.position.z*=-1,t.add(g);const v=m.clone();v.position.z*=-1,t.add(v),t.userData.wheels=[f,m,g,v]}return t}const Je=(i,e,t)=>Math.min(t,Math.max(e,i)),pi=(i,e,t)=>i+(e-i)*t,ne=(i,e)=>i+Math.random()*(e-i),en=i=>i[Math.floor(Math.random()*i.length)],Lt=(i,e,t,n)=>pi(i,e,1-Math.exp(-t*n)),It=i=>i/3.6,Ar=i=>i*3.6,xm=()=>new Date().toISOString().slice(0,10);function ys(i){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,8,64,64,64);i.forEach(r=>n.addColorStop(r.position,r.color)),t.fillStyle=n,t.fillRect(0,0,128,128);const s=new yl(e);return s.needsUpdate=!0,s}function Mm(){const i=document.createElement("canvas");i.width=256,i.height=128;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);const t=[[60,70,34],[94,52,40],[132,72,36],[172,62,32]],n=e.createLinearGradient(0,20,0,120);n.addColorStop(0,"rgba(255,255,255,0.95)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,t.forEach(([r,a,o])=>{e.beginPath(),e.arc(r,a,o,0,Math.PI*2),e.fill()});const s=new yl(i);return s.needsUpdate=!0,s}function ym(){const i=Math.random();return i<.42?"car":i<.54?"van":i<.68?"motorcycle":i<.82?"truck":"bus"}function Sm(i){return i.charAt(0).toUpperCase()+i.slice(1)}class Em{constructor({canvas:e,touchRoot:t}){this.canvas=e,this.touchRoot=t,this.saveData=um(),this.leaderboard=Ul(),this.ui=new mm(this.saveData),this.ui.renderLeaderboard(this.leaderboard),this.input=new hm({touchRoot:t}),this.audio=new cm,this.renderer=null,this.scene=null,this.composer=null,this.renderPass=null,this.bloomPass=null,this.filmPass=null,this.skyMaterial=null,this.sunLight=null,this.hemiLight=null,this.sunSprite=null,this.activeCamera=null,this.lastTick=performance.now(),this.playerCar=null,this.playerHeadlights=[],this.nitroFlames=[],this.engineSmokeAnchor=null,this.worldRoot=new xt,this.roadGroup=new xt,this.trafficGroup=new xt,this.policeGroup=new xt,this.fxGroup=new xt,this.cloudGroup=new xt,this.road={laneCount:6,laneWidth:4.2,roadWidth:29.5,shoulderWidth:2.6,segmentLength:42,segmentCount:28,segments:[]},this.laneCenters=Array.from({length:this.road.laneCount},(n,s)=>(s-(this.road.laneCount-1)/2)*this.road.laneWidth),this.materials={},this.textures={},this.weatherState={current:"day",target:"day",blend:1},this.graphicsProfile={trafficCap:22,particleCap:120,pixelRatio:1.5},this.cameras={chase:new St(68,window.innerWidth/window.innerHeight,.1,2600),cockpit:new St(82,window.innerWidth/window.innerHeight,.05,2200),hood:new St(74,window.innerWidth/window.innerHeight,.05,2200),cinematic:new St(68,window.innerWidth/window.innerHeight,.1,2600),orbit:new St(66,window.innerWidth/window.innerHeight,.1,2600)},this.player={x:this.laneCenters[4],z:0,speedMps:0,lateralVelocity:0,yaw:0,slipAngle:0,steerInput:0,steering:0,wheelSpin:0,gear:1,rpm:900,nitro:1,damage:0,throttle:0,brakePressure:0,headlights:!0,leftSignal:!1,rightSignal:!1,signalTimer:0,signalCommitted:!1,indicatorPhase:!1,hazard:!1,offroad:!1,reversing:!1},this.session=null,this.phase="loading",this.currentMode=xi[0],this.cameraMode="orbit",this.traffic=[],this.police=[],this.particles=[],this.tmpVec=new L,this.tmpVec2=new L,this.tmpVec3=new L,this.tmpVec4=new L,this.upAxis=new L(0,1,0),this.cameraPosition=new L,this.cameraTarget=new L,this.vehicleId=0,this.smokeTimer=0,this.dustTimer=0,this.pauseSettingsOpen=!1,this.pendingNicknamePrompt=!1}async init(){this.ui.setLoading(.08,"Loading driver profile..."),this.input.bind(),this.bindUI(),this.bindRuntimeEvents(),await this.nextFrame(),this.ui.setLoading(.22,"Creating renderer and post effects..."),this.setupRenderer(),await this.nextFrame(),this.ui.setLoading(.44,"Building highway geometry and scenery..."),this.buildWorld(),await this.nextFrame(),this.ui.setLoading(.67,"Assembling the debadged sports sedan..."),this.rebuildPlayerCar(),await this.nextFrame(),this.ui.setLoading(.86,"Applying tuning, audio, and controls..."),this.applySettings(this.saveData.settings,!0),this.enterMenu("main-menu"),this.ui.finishLoading(),this.lastTick=performance.now(),this.animate()}nextFrame(){return new Promise(e=>requestAnimationFrame(()=>e()))}setupRenderer(){this.renderer=new Jp({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ot,this.renderer.toneMapping=jo,this.renderer.toneMappingExposure=1.28,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ko,this.renderer.setSize(window.innerWidth,window.innerHeight),this.scene=new th,this.scene.fog=new ba(11915493,.0016),this.scene.add(this.worldRoot),this.worldRoot.add(this.roadGroup,this.trafficGroup,this.policeGroup,this.fxGroup,this.cloudGroup);const e=new Aa(1600,32,15);this.skyMaterial=new bt({side:Rt,depthWrite:!1,uniforms:{topColor:{value:new oe(Kt.day.skyTop)},bottomColor:{value:new oe(Kt.day.skyBottom)},offset:{value:80},exponent:{value:.65}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          float mixStrength = max(pow(max(h, 0.0), exponent), 0.0);
          gl_FragColor = vec4(mix(bottomColor, topColor, mixStrength), 1.0);
        }
      `});const t=new de(e,this.skyMaterial);this.scene.add(t);const n=ys([{position:0,color:"rgba(255,255,255,1)"},{position:.18,color:"rgba(255,244,210,0.9)"},{position:.42,color:"rgba(255,204,134,0.45)"},{position:1,color:"rgba(255,160,50,0)"}]);this.sunSprite=new _r(new As({map:n,transparent:!0,depthWrite:!1,blending:Ls})),this.sunSprite.scale.setScalar(240),this.sunSprite.position.set(-260,220,-720),this.scene.add(this.sunSprite);const s=Mm();for(let r=0;r<14;r+=1){const a=new _r(new As({map:s,transparent:!0,opacity:ne(.22,.52),depthWrite:!1}));a.position.set(ne(-260,260),ne(120,220),ne(-680,680)),a.scale.set(ne(110,190),ne(55,90),1),a.userData.drift=ne(.4,1.2),this.cloudGroup.add(a)}this.hemiLight=new lh(16777215,3427165,1.08),this.scene.add(this.hemiLight),this.sunLight=new dh(16774109,1.38),this.sunLight.position.set(48,65,-18),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.left=-80,this.sunLight.shadow.camera.right=80,this.sunLight.shadow.camera.top=80,this.sunLight.shadow.camera.bottom=-80,this.sunLight.shadow.camera.far=180,this.scene.add(this.sunLight),this.activeCamera=this.cameras.orbit,this.renderPass=new om(this.scene,this.activeCamera),this.bloomPass=new bi(new De(window.innerWidth,window.innerHeight),.72,.62,.08),this.filmPass=new am(.12,.018,512,!1),this.composer=new sm(this.renderer),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.filmPass)}buildWorld(){this.materials.road=new st({color:3620163,roughness:.86,metalness:.18}),this.materials.shoulder=new st({color:4344402,roughness:.96,metalness:.08}),this.materials.lane=new st({color:16775643,emissive:16777215,emissiveIntensity:.16,roughness:.45,metalness:.15}),this.materials.centerLine=new st({color:16765292,emissive:16753211,emissiveIntensity:.18,roughness:.4,metalness:.2}),this.materials.guardrail=new st({color:11450564,roughness:.35,metalness:.95}),this.materials.terrain=new st({color:4876365,roughness:1,metalness:0}),this.materials.city=new st({color:4939889,emissive:859948,emissiveIntensity:.25,roughness:.92,metalness:.25}),this.materials.lightPole=new st({color:6252659,roughness:.62,metalness:.8});for(let e=0;e<this.road.segmentCount;e+=1){const t=this.createRoadSegment(e);this.road.segments.push(t),this.roadGroup.add(t)}this.resetRoadAround(0),this.createRainSystem(),this.createParticlePool(),this.applyWeather("day",!0)}createRoadSegment(e){const t=new xt;t.userData.index=e,t.userData.baseFeature=en(["sign","billboard","bridge","none","tunnel","lamps"]);const n=new de(new Ae(this.road.roadWidth,.12,this.road.segmentLength),this.materials.road);n.receiveShadow=!0,n.position.y=-.02,t.add(n);const s=(this.road.roadWidth+this.road.shoulderWidth*2)/2,r=new de(new Ae(this.road.shoulderWidth,.08,this.road.segmentLength),this.materials.shoulder);r.position.set(-s+this.road.shoulderWidth/2,-.03,0),t.add(r);const a=r.clone();a.position.x*=-1,t.add(a);const o=70,l=new de(new qi(o,this.road.segmentLength+24),this.materials.terrain);l.rotation.x=-Math.PI/2,l.position.set(-this.road.roadWidth/2-o/2-2,-.11,0),l.receiveShadow=!0,t.add(l);const c=l.clone();c.position.x*=-1,t.add(c),this.laneCenters.slice(0,-1).map((h,T)=>h+this.road.laneWidth/2+0).forEach((h,T)=>{const E=T===2;for(let y=-2;y<4;y+=1){const D=new de(new Ae(E?.13:.09,.02,E?4.5:3.3),E?this.materials.centerLine:this.materials.lane);if(D.position.set(h+(E?-.14:0),.04,y*7.5),t.add(D),E){const C=D.clone();C.position.x=h+.14,t.add(C)}}});const d=this.road.roadWidth/2-.2;[-d,d].forEach(h=>{for(let T=-2;T<4;T+=1){const E=new de(new Ae(.12,.02,5.5),this.materials.lane);E.position.set(h,.04,T*7.2),t.add(E)}});const f=this.road.roadWidth/2+1.75,m=new Ae(.18,.5,this.road.segmentLength),g=new de(m,this.materials.guardrail);g.position.set(-f,.25,0),g.castShadow=!0,t.add(g);const v=g.clone();v.position.x*=-1,t.add(v);for(let h of[-1,1]){for(let E=0;E<3;E+=1){const y=new de(new Ae(ne(6,18),ne(12,42),ne(8,16)),this.materials.city);y.position.set(h*ne(28,66),y.geometry.parameters.height/2-.15,ne(-15,15)),y.castShadow=!0,y.receiveShadow=!0,t.add(y)}const T=new de(new Os(ne(12,22),ne(22,40),6),this.materials.terrain);T.position.set(h*ne(70,110),T.geometry.parameters.height/2-.1,ne(-12,12)),T.rotation.y=ne(0,Math.PI),T.receiveShadow=!0,t.add(T)}const p=(h,T)=>{const E=new xt,y=new de(new Yn(.08,.08,7.4,10),this.materials.lightPole);y.position.y=3.7,y.castShadow=!0,E.add(y);const D=new de(new Ae(2.4,.12,.12),this.materials.lightPole);D.position.set(h*-1.1,6.95,0),E.add(D);const C=new de(new Ae(.35,.22,.35),new st({color:15267839,emissive:16773831,emissiveIntensity:1.3}));C.position.set(h*-2.15,6.9,0),E.add(C),E.position.set(h*(this.road.roadWidth/2+3.3),0,T),t.add(E)};if(p(-1,-13),p(1,9),t.userData.baseFeature==="billboard"){const h=new xt,T=new de(new Ae(.32,7.6,.32),this.materials.lightPole);T.position.y=3.8,h.add(T);const E=new de(new Ae(6.5,2.4,.28),new st({color:1581355,emissive:1128014,emissiveIntensity:1.15}));E.position.set(0,7.5,0),h.add(E),h.position.set(en([-1,1])*(this.road.roadWidth/2+8.4),0,ne(-8,8)),h.rotation.y=en([0,Math.PI]),h.traverse(y=>{y.castShadow=!0}),t.add(h)}if(t.userData.baseFeature==="bridge"){const h=new de(new Ae(this.road.roadWidth+8,.45,3),this.materials.guardrail);h.position.set(0,8.7,0),t.add(h);const T=new de(new Ae(.6,8.7,.9),this.materials.guardrail);T.position.set(-this.road.roadWidth/2-1.3,4.35,0),t.add(T);const E=T.clone();E.position.x*=-1,t.add(E)}if(t.userData.baseFeature==="tunnel"){const h=new st({color:2830647,roughness:.84,metalness:.2}),T=new de(new Ae(this.road.roadWidth+6.5,.6,this.road.segmentLength),h);T.position.set(0,8.8,0),t.add(T);const E=new de(new Ae(.7,8.8,this.road.segmentLength),h);E.position.set(-this.road.roadWidth/2-2.6,4.4,0),t.add(E);const y=E.clone();y.position.x*=-1,t.add(y)}if(t.userData.baseFeature==="sign"){const h=new xt,T=new de(new Ae(.24,5,.24),this.materials.lightPole);T.position.y=2.5,h.add(T);const E=new de(new Ae(3.2,1.3,.14),new st({color:1922360,roughness:.4,metalness:.25}));E.position.set(0,5.6,0),h.add(E),h.position.set(-this.road.roadWidth/2-5,0,ne(-12,12)),t.add(h)}return t}createRainSystem(){const t=new Float32Array(2700),n=new Float32Array(900);for(let a=0;a<900;a+=1)t[a*3]=ne(-18,18),t[a*3+1]=ne(1,28),t[a*3+2]=ne(-24,24),n[a]=ne(14,30);const s=new Ut;s.setAttribute("position",new Gt(t,3));const r=new Ml({color:13494271,size:.08,transparent:!0,opacity:.65,depthWrite:!1});this.rain=new rh(s,r),this.rain.visible=!1,this.rain.userData.speeds=n,this.fxGroup.add(this.rain)}createParticlePool(){this.textures.smoke=ys([{position:0,color:"rgba(255,255,255,0.9)"},{position:.32,color:"rgba(180,190,200,0.52)"},{position:1,color:"rgba(120,130,140,0)"}]),this.textures.spark=ys([{position:0,color:"rgba(255,255,255,1)"},{position:.22,color:"rgba(255,220,120,1)"},{position:.58,color:"rgba(255,120,40,0.55)"},{position:1,color:"rgba(255,60,20,0)"}]),this.textures.flame=ys([{position:0,color:"rgba(255,255,255,1)"},{position:.18,color:"rgba(150,225,255,0.95)"},{position:.45,color:"rgba(70,160,255,0.65)"},{position:1,color:"rgba(70,160,255,0)"}]);const e=150;for(let t=0;t<e;t+=1){const n=new As({map:this.textures.smoke,transparent:!0,opacity:0,depthWrite:!1,color:16777215}),s=new _r(n);s.scale.setScalar(0),s.visible=!1,this.fxGroup.add(s),this.particles.push({sprite:s,velocity:new L,gravity:0,drag:.94,life:0,maxLife:1})}}rebuildPlayerCar(){const e=this.playerCar,t=e?{position:e.position.clone(),rotationY:e.rotation.y}:{position:new L(this.player.x,0,this.player.z),rotationY:0};e&&this.scene.remove(e),this.playerCar=_m(this.saveData.customization),this.playerCar.position.copy(t.position),this.playerCar.rotation.y=t.rotationY,this.playerCar.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)});const n=new hh(14939391,0,160,Math.PI/8,.32,1.2);n.position.set(-.58,.84,2.25),n.target.position.set(-.58,.3,40),this.playerCar.add(n,n.target);const s=n.clone();s.position.x*=-1,s.target.position.x*=-1,this.playerCar.add(s,s.target),this.playerHeadlights=[n,s];const r=new de(new Os(.08,.4,8),new Hs({color:6998271,transparent:!0,opacity:.8}));r.rotation.x=-Math.PI/2,r.position.set(-.42,.34,-2.62),r.visible=!1,this.playerCar.add(r);const a=r.clone();a.position.x*=-1,this.playerCar.add(a),this.nitroFlames=[r,a],this.engineSmokeAnchor=new rt,this.engineSmokeAnchor.position.set(0,1,1.35),this.playerCar.add(this.engineSmokeAnchor),this.scene.add(this.playerCar),this.updateDamageVisuals(),this.updateLights(0)}bindUI(){this.ui.bindGarageHandlers({onUpgrade:e=>this.purchaseUpgrade(e),onTuneChange:(e,t)=>{this.saveData.tuning[e]=t,Qt(this.saveData)},onResetTuning:()=>{this.saveData=dm(this.saveData),this.refreshUI(),Qt(this.saveData)},onCustomizationChange:e=>{this.saveData.customization={...this.saveData.customization,...e},this.rebuildPlayerCar(),this.refreshUI(),Qt(this.saveData)}}),this.ui.bindSettingsHandlers(e=>{this.applySettings(e),this.refreshUI(),Qt(this.saveData),this.pushEvent("Settings applied.")}),this.ui.bindMenus({onStartRun:e=>this.requestStartRun(e),onDailyReward:()=>this.claimDailyReward(),onResume:()=>this.togglePause(!1),onPauseSettings:()=>this.openPauseSettings(),onQuitRun:()=>{this.togglePause(!1),this.endRun("Session quit",!1)},onRetry:()=>this.requestStartRun(this.currentMode.id),onResultsGarage:()=>this.enterMenu("garage-screen"),onCloseSettings:()=>this.closePauseSettings(!1)})}bindRuntimeEvents(){window.addEventListener("resize",()=>this.handleResize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.phase==="running"&&this.togglePause(!0)}),window.addEventListener("pointerdown",()=>{this.audio.start()},{passive:!0})}handleResize(){const e=window.innerWidth,t=window.innerHeight;Object.values(this.cameras).forEach(n=>{n.aspect=e/t,n.updateProjectionMatrix()}),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.ui.toggleTouchControls(window.matchMedia("(max-width: 900px)").matches)}applySettings(e,t=!1){this.saveData.settings=t?{...this.saveData.settings,...e}:{...this.saveData.settings,...e};const n={low:{pixelRatio:1,bloom:.32,film:!1,shadows:!1,trafficCap:16,particleCap:70},medium:{pixelRatio:1.2,bloom:.5,film:!0,shadows:!0,trafficCap:20,particleCap:95},high:{pixelRatio:1.5,bloom:.72,film:!0,shadows:!0,trafficCap:26,particleCap:130},ultra:{pixelRatio:2,bloom:.9,film:!0,shadows:!0,trafficCap:32,particleCap:150}};this.graphicsProfile=n[this.saveData.settings.graphicsQuality]??n.high,this.renderer&&(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.graphicsProfile.pixelRatio)),this.renderer.shadowMap.enabled=this.graphicsProfile.shadows),this.bloomPass&&(this.bloomPass.strength=this.graphicsProfile.bloom),this.filmPass&&(this.filmPass.enabled=this.graphicsProfile.film),this.input.gamepadEnabled=this.saveData.settings.gamepadEnabled,this.input.gamepadDeadzone=this.saveData.settings.gamepadDeadzone,this.audio.setVolumes({masterVolume:this.saveData.settings.masterVolume,sfxVolume:this.saveData.settings.sfxVolume,musicVolume:this.saveData.settings.musicVolume,engineVolume:this.saveData.settings.engineVolume,ambienceVolume:this.saveData.settings.ambienceVolume}),this.audio.setSceneState({menu:this.phase==="menu"||this.phase==="results",paused:this.phase==="paused",running:this.phase==="running"||this.phase==="intro"||this.phase==="crashReplay"}),this.touchRoot&&this.touchRoot.classList.toggle("compact",this.saveData.settings.touchLayout==="compact"),this.ui.toggleTouchControls(window.matchMedia("(max-width: 900px)").matches),Qt(this.saveData)}refreshUI(){this.ui.refreshFromSave(this.saveData),this.ui.renderUpgradeCards(),this.ui.renderTuningControls(),this.ui.renderMissions(),this.ui.renderAchievements(),this.ui.renderLeaderboard(this.leaderboard)}getModeById(e){return xi.find(t=>t.id===e)??xi[0]}getCurrentObjective(e){return e.id==="career"?Oi.find(n=>this.saveData.missionProgress[n.id]<n.goal)?.title??"All missions complete. Chase a new best score.":e.id==="time-trial"?"Beat the timer and hold your average speed.":e.id==="police"?"Build distance, outrun the interceptors, and escape roadblocks.":e.id==="rain"?"Survive the slick surface and keep the combo alive.":e.id==="night"?"Use headlights and push top speed after dark.":e.id==="delivery"?"Deliver the package before the timer expires.":e.id==="hardcore"?"One impact can end the run. Precision first.":e.id==="free"?"Cruise and experiment with the car setup.":"Survive traffic and stack close overtakes."}getPerformanceSpec(){const e=this.saveData.upgrades,t=this.saveData.tuning,n=1-this.player.damage*.42,s=Kt[this.weatherState.current]?.wetness??0;return{maxSpeedMps:It(258*(1+e.engine*.038+e.ecu*.03+e.exhaust*.012)*(1+(t.gearRatio-1)*.25))*n,accel:18*(1+e.turbo*.1+e.weight*.04+e.gearbox*.035)*n,brake:28*(1+e.brakes*.08)*(.92+t.brakeBias*.2)*(1+(t.abs?.08:-.05)),grip:7.2*(1+e.tires*.06+e.suspension*.05+e.diff*.03)*t.tireGrip*t.suspensionStiffness*(1-s*.28),steer:10.8*t.steeringSensitivity*(1+e.suspension*.025),nitroBoost:20*t.nitroPower*(1+e.nitro*.09)*n,nitroCapacity:1+e.nitro*.12,driftAssist:t.driftAssist}}enterMenu(e="main-menu"){this.pauseSettingsOpen=!1,this.phase="menu",this.ui.toggleMenu(!0),this.ui.toggleHUD(!1),this.ui.togglePause(!1),this.ui.toggleResults(!1),this.ui.setPauseSettingsOpen(!1),this.ui.showScreen(e),this.cameraMode="orbit",this.activeCamera=this.cameras.orbit,this.player.speedMps=Lt(this.player.speedMps,It(90),.25,1),this.player.headlights=!1,this.updateLights(0),this.audio.setSceneState({menu:!0,paused:!1,running:!1})}openPauseSettings(){if(!this.session||this.session.ended){this.enterMenu("settings-screen");return}this.pauseSettingsOpen=!0,this.phase="paused",this.ui.togglePause(!1),this.ui.toggleMenu(!0),this.ui.showScreen("settings-screen"),this.ui.setPauseSettingsOpen(!0),this.audio.setSceneState({menu:!1,paused:!0,running:!1})}closePauseSettings(e=!1){if(this.pauseSettingsOpen){if(this.pauseSettingsOpen=!1,this.ui.setPauseSettingsOpen(!1),this.ui.toggleMenu(!1),e){this.phase="running",this.ui.togglePause(!1),this.audio.setSceneState({menu:!1,paused:!1,running:!0});return}this.phase="paused",this.ui.togglePause(!0),this.audio.setSceneState({menu:!1,paused:!0,running:!1})}}async requestStartRun(e){if(this.pendingNicknamePrompt)return;const t=this.getModeById(e),n=this.session&&!this.session.ended&&["running","intro"].includes(this.phase),s=this.phase;n&&(this.phase="paused",this.ui.togglePause(!1),this.audio.setSceneState({menu:!1,paused:!0,running:!1})),this.pendingNicknamePrompt=!0;const r=await this.ui.promptNickname(t.name);if(this.pendingNicknamePrompt=!1,!r){n&&(this.phase=s,this.audio.setSceneState({menu:!1,paused:!1,running:!0}));return}await this.startRun(t.id,r)}async startRun(e,t="Driver"){await this.audio.start(),this.currentMode=this.getModeById(e),this.saveData.selectedMode=this.currentMode.id,Qt(this.saveData),this.phase="intro",this.cameraMode="chase",this.activeCamera=this.cameras.cinematic,this.pauseSettingsOpen=!1,this.session={mode:this.currentMode,nickname:t,score:0,displayMoney:0,distanceKm:0,distanceM:0,topSpeed:0,bestCombo:1,combo:1,comboTimer:1,comboWindow:4.2,nearMisses:0,bestNearMissStreak:0,closeCallStreak:0,damage:0,wantedLevel:this.currentMode.police?1:0,peakWantedLevel:this.currentMode.police?1:0,wantedHeat:this.currentMode.police?.25:0,policeEscapeTime:0,policeEscapeBonus:0,wrongLaneTime:0,timerRemaining:this.currentMode.timer,objective:this.getCurrentObjective(this.currentMode),activeCameraLabel:"Cinematic Launch",runTime:0,averageSpeedAccumulator:0,averageSpeedSamples:0,truckPasses:0,noCrash:!0,crashReplayTimer:0,roadblockCooldown:16,weatherTimer:ne(45,75),introTimer:1.4,repairCost:0,ended:!1,success:!1,missionPulse:!1},this.player={...this.player,x:this.laneCenters[4],z:0,speedMps:0,lateralVelocity:0,yaw:0,steering:0,steerInput:0,slipAngle:0,wheelSpin:0,gear:1,rpm:900,nitro:1,damage:0,throttle:0,brakePressure:0,headlights:["night","rain","storm","fog"].includes(this.currentMode.weather),leftSignal:!1,rightSignal:!1,signalTimer:0,signalCommitted:!1,indicatorPhase:!1,hazard:!1,offroad:!1,reversing:!1},this.player.nitro=this.getPerformanceSpec().nitroCapacity,this.repositionPlayerCar(),this.clearTraffic(),this.resetRoadAround(this.player.z),this.applyWeather(this.currentMode.weather,!0),this.ui.toggleMenu(!1),this.ui.toggleResults(!1),this.ui.toggleHUD(!0),this.ui.togglePause(!1),this.ui.setPauseSettingsOpen(!1),this.ui.events.length=0,this.ui.el.eventFeed.innerHTML="",this.pushEvent(`${t} started ${this.currentMode.name}. ${this.session.objective}`),this.audio.setSceneState({menu:!1,paused:!1,running:!0});for(let n=0;n<12;n+=1)this.spawnTrafficVehicle(!0);if(this.currentMode.police)for(let n=0;n<2;n+=1)this.spawnPoliceVehicle(n===1)}clearTraffic(){this.traffic.forEach(e=>this.trafficGroup.remove(e.mesh)),this.police.forEach(e=>this.policeGroup.remove(e.mesh)),this.traffic=[],this.police=[]}resetRoadAround(e){const t=e-this.road.segmentLength*4;this.road.segments.forEach((n,s)=>{n.position.set(0,0,t+s*this.road.segmentLength)})}repositionPlayerCar(){this.playerCar&&(this.playerCar.position.set(this.player.x,0,this.player.z),this.playerCar.rotation.y=this.player.yaw)}applyWeather(e,t=!1){this.weatherState.target=e,this.weatherState.current=t?e:this.weatherState.current,this.weatherState.blend=t?1:0,t&&this.updateWeatherMaterialState(Kt[e])}updateWeather(e){if(!this.session&&this.phase!=="menu")return;const t=Kt[this.weatherState.target],n=Kt[this.weatherState.current];if(this.weatherState.current!==this.weatherState.target){this.weatherState.blend=Math.min(1,this.weatherState.blend+e*.18);const s={skyTop:new oe(n.skyTop).lerp(new oe(t.skyTop),this.weatherState.blend),skyBottom:new oe(n.skyBottom).lerp(new oe(t.skyBottom),this.weatherState.blend),fog:new oe(n.fog).lerp(new oe(t.fog),this.weatherState.blend),ambient:new oe(n.ambient).lerp(new oe(t.ambient),this.weatherState.blend),sun:new oe(n.sun).lerp(new oe(t.sun),this.weatherState.blend),lightIntensity:pi(n.lightIntensity,t.lightIntensity,this.weatherState.blend),wetness:pi(n.wetness,t.wetness,this.weatherState.blend),rain:pi(n.rain,t.rain,this.weatherState.blend),night:pi(n.night,t.night,this.weatherState.blend)};this.updateWeatherMaterialState(s),this.weatherState.blend>=1&&(this.weatherState.current=this.weatherState.target)}else this.updateWeatherMaterialState(t)}updateWeatherMaterialState(e){this.skyMaterial.uniforms.topColor.value.copy(e.skyTop instanceof oe?e.skyTop:new oe(e.skyTop)),this.skyMaterial.uniforms.bottomColor.value.copy(e.skyBottom instanceof oe?e.skyBottom:new oe(e.skyBottom));const t=e.fog instanceof oe?e.fog:new oe(e.fog);this.scene.fog.color.copy(t),this.scene.fog.density=.00115+(e.night||0)*55e-5+(e.rain||0)*22e-5,this.renderer.setClearColor(t),this.hemiLight.color.copy(e.ambient instanceof oe?e.ambient:new oe(e.ambient)),this.hemiLight.intensity=.95+(e.night||0)*.38+(e.rain||0)*.08,this.sunLight.color.copy(e.sun instanceof oe?e.sun:new oe(e.sun)),this.sunLight.intensity=e.lightIntensity*1.16,this.sunSprite.material.opacity=.78-(e.night||0)*.22,this.sunSprite.position.y=220-(e.night||0)*80,this.materials.road.roughness=.93-e.wetness*.4,this.materials.road.metalness=.12+e.wetness*.42,this.materials.road.color.setHSL(.58,.05,.25-(e.night||0)*.025),this.materials.lane.emissiveIntensity=.16+(e.night||0)*.44+(e.rain||0)*.12,this.materials.centerLine.emissiveIntensity=.18+(e.night||0)*.48+(e.rain||0)*.1,this.rain.visible=e.rain>.05,this.rain.material.opacity=.22+e.rain*.28,this.ui.toggleCockpit(this.cameraMode==="cockpit",Je(e.rain*.3+this.player.speedMps*.0012*e.rain,0,.65),Je(this.player.damage*1.1,0,.75))}updateRain(e){if(!this.rain.visible)return;const t=this.rain.geometry.attributes.position.array,n=this.rain.userData.speeds;for(let s=0;s<n.length;s+=1)t[s*3]+=Math.sin(performance.now()*.002+s)*.003,t[s*3+1]-=n[s]*e,t[s*3+2]+=(this.player.speedMps*.6+n[s])*e*.08,(t[s*3+1]<-1||t[s*3+2]>28)&&(t[s*3]=ne(-18,18),t[s*3+1]=ne(12,30),t[s*3+2]=ne(-26,10));this.rain.position.set(this.player.x,1,this.player.z+4),this.rain.geometry.attributes.position.needsUpdate=!0}spawnParticle({position:e,velocity:t,life:n=.7,scale:s=1,color:r=16777215,texture:a="smoke",opacity:o=.7,gravity:l=1.5,drag:c=.94}){const u=this.particles.find(d=>d.life<=0);u&&(u.life=n,u.maxLife=n,u.gravity=l,u.drag=c,u.velocity.copy(t),u.sprite.position.copy(e),u.sprite.scale.setScalar(s),u.sprite.material.map=this.textures[a],u.sprite.material.color.set(r),u.sprite.material.opacity=o,u.sprite.visible=!0)}pushEvent(e){this.ui.addEvent(e)}purchaseUpgrade(e){const t=zs.find(r=>r.id===e);if(!t)return;const n=this.saveData.upgrades[e];if(n>=t.max)return;const s=Math.round(t.baseCost*(1+n*.55));if(this.saveData.money<s){this.pushEvent("Not enough credits for that upgrade.");return}this.saveData.money-=s,this.saveData.upgrades[e]+=1,this.refreshUI(),Qt(this.saveData),this.pushEvent(`${t.label} upgraded to level ${this.saveData.upgrades[e]}.`)}claimDailyReward(){const e=xm();if(this.saveData.dailyReward.lastClaimDay===e){this.pushEvent("Daily reward already claimed today.");return}const t=this.saveData.dailyReward.lastClaimDay,n=new Date(Date.now()-864e5).toISOString().slice(0,10);this.saveData.dailyReward.streak=t===n?this.saveData.dailyReward.streak+1:1,this.saveData.dailyReward.lastClaimDay=e;const s=600+this.saveData.dailyReward.streak*180;this.saveData.money+=s,this.saveData.stats.totalMoneyEarned+=s,this.refreshUI(),Qt(this.saveData),this.pushEvent(`Daily reward claimed: ${s} credits.`)}handleActions(){this.input.consumeActions().forEach(t=>{t==="camera"&&(this.phase==="running"||this.phase==="intro")&&this.cycleCamera(),t==="reset"&&this.session&&!this.session.ended&&this.requestStartRun(this.currentMode.id),t==="pause"&&(this.pauseSettingsOpen?this.closePauseSettings(!1):(this.phase==="running"||this.phase==="intro"||this.phase==="paused")&&this.togglePause()),t==="map"&&this.session&&(this.saveData.settings.showMap=!this.saveData.settings.showMap,Qt(this.saveData)),t==="headlights"&&this.session&&(this.player.headlights=!this.player.headlights,this.pushEvent(`Headlights ${this.player.headlights?"on":"off"}.`)),t==="signalLeft"&&this.session&&(this.player.leftSignal=!this.player.leftSignal,this.player.rightSignal=!1,this.player.signalTimer=0,this.player.signalCommitted=!1),t==="signalRight"&&this.session&&(this.player.rightSignal=!this.player.rightSignal,this.player.leftSignal=!1,this.player.signalTimer=0,this.player.signalCommitted=!1)})}cycleCamera(){const e=["chase","cockpit","hood"],t=e.indexOf(this.cameraMode);this.cameraMode=e[(t+1+e.length)%e.length],this.pushEvent(`Camera switched to ${this.getCameraLabel(this.cameraMode)} view.`)}getCameraLabel(e){return e==="cockpit"?"Cockpit":e==="hood"?"Hood":e==="cinematic"?"Cinematic":e==="orbit"?"Garage Orbit":"Chase"}togglePause(e){if(!this.session||this.session.ended)return;if(this.pauseSettingsOpen&&e===!1){this.closePauseSettings(!0);return}const t=e??this.phase!=="paused";this.phase=t?"paused":"running",this.ui.togglePause(t),this.ui.toggleMenu(!1),this.ui.setPauseSettingsOpen(!1),this.pauseSettingsOpen=!1,this.audio.setSceneState({menu:!1,paused:t,running:!t})}spawnTrafficVehicle(e=!1,t=null,n=null,s=null){if(this.traffic.length>=this.graphicsProfile.trafficCap)return null;const r=t??ym(),a=ga(r,{wheelStyle:en(["sport","mesh","track"])}),o=["two-way","police","hardcore"].includes(this.currentMode.id),l=o&&!["bus","truck"].includes(r),c=s??(l&&Math.random()<.46),d=n??en(o?c?[0,1,2]:[3,4,5]:[0,1,2,3,4,5]),f=this.laneCenters[d],m=a.userData.size,g={motorcycle:ne(30,44),van:ne(22,32),bus:ne(20,27),truck:ne(18,24),car:ne(26,38)}[r],v=this.player.z+(c?ne(220,460):ne(e?80:140,e?170:420));if(this.traffic.some(T=>Math.abs(T.z-v)<26&&Math.abs(T.laneX-f)<this.road.laneWidth*.6&&T.direction===(c?-1:1)))return this.trafficGroup.remove(a),null;const h={id:this.vehicleId+=1,mesh:a,type:r,speedMps:g,desiredSpeedMps:g+ne(-3,4),laneIndex:d,laneX:f,z:v,prevRelativeZ:v-this.player.z,direction:c?-1:1,isOncoming:c,changingLane:!1,targetLane:d,laneChangeT:0,laneChangeCooldown:ne(2.5,6.5),aggressive:Math.random()<.18,filtered:r==="motorcycle"&&Math.random()<.52,nearMissAwarded:!1,countedPass:!1,brakeVisual:0,size:m};return a.position.set(f,0,v),a.rotation.y=c?Math.PI:0,a.userData.entry=h,this.traffic.push(h),this.trafficGroup.add(a),h}spawnPoliceVehicle(e=!1){if(!this.session?.mode.police)return;const t=ga("police"),n=Je(Math.round(this.player.x/this.road.laneWidth+(this.road.laneCount-1)/2),3,5),s=e?Je(n+en([-1,1]),3,5):n,r=this.laneCenters[s],a=this.player.z-(e?ne(12,28):ne(45,70)),o={id:this.vehicleId+=1,mesh:t,laneIndex:s,laneX:r,z:a,speedMps:this.player.speedMps+ne(5,10),targetOffset:e?en([-1,1])*this.road.laneWidth:0,brakeVisual:0,size:t.userData.size,ramCooldown:ne(.5,2.3)};t.position.set(r,0,a),this.police.push(o),this.policeGroup.add(t)}spawnRoadblock(){if(!this.session||!this.session.mode.police||this.session.wantedLevel<3)return;const e=this.player.z+ne(240,320);[3,4,5].forEach((t,n)=>{const s=this.spawnTrafficVehicle(!1,n===1?"truck":"car",t,!1);s&&(s.z=e+n*10,s.speedMps=n===1?8:14,s.desiredSpeedMps=s.speedMps,s.mesh.position.z=s.z,s.mesh.userData.roadblock=!0)}),this.pushEvent("Roadblock reported ahead.")}updateTraffic(e){if(!this.session)return;const t=Je(this.session.runTime/65,0,1),n={free:-4,rain:1,night:1,career:1,"time-trial":2,"two-way":2,delivery:4,hardcore:3}[this.currentMode.id]??0,s=Math.min(this.graphicsProfile.trafficCap,Math.max(6,Math.round(11+t*10+n+(this.currentMode.police?2:0))));for(;this.traffic.length<s;)this.spawnTrafficVehicle(!1);const r=[];this.getPerformanceSpec(),this.traffic.forEach(a=>{a.laneChangeCooldown-=e*(a.aggressive?1.4:1);const o=this.findLeadVehicle(a,this.traffic);let l=a.desiredSpeedMps;if(o&&o.distance<18+(a.type==="truck"?8:0)?(l=Math.min(l,o.entry.speedMps-ne(.5,2.4)),a.brakeVisual=Je(a.brakeVisual+e*2.8,0,1)):a.brakeVisual=Je(a.brakeVisual-e*2.4,0,1),!a.isOncoming&&a.laneChangeCooldown<=0&&Math.random()<e*.35){const h=[a.laneIndex-1,a.laneIndex+1].filter(T=>(["two-way","police","hardcore"].includes(this.currentMode.id)?[3,4,5]:[0,1,2,3,4,5]).includes(T)).find(T=>this.isLaneClear(T,a.z,24));h!==void 0&&(a.changingLane=!0,a.targetLane=h,a.laneStart=a.laneX,a.laneGoal=this.laneCenters[h],a.laneChangeT=0,a.laneChangeCooldown=ne(3.8,7.2))}if(a.filtered&&(a.laneX+=Math.sin(this.session.runTime*2.6+a.id)*e*.6),a.changingLane){a.laneChangeT=Math.min(1,a.laneChangeT+e*.65);const p=a.laneChangeT*a.laneChangeT*(3-2*a.laneChangeT);a.laneX=pi(a.laneStart,a.laneGoal,p),a.laneChangeT>=1&&(a.changingLane=!1,a.laneIndex=a.targetLane,a.laneX=a.laneGoal)}else a.laneX=Lt(a.laneX,this.laneCenters[a.laneIndex],4.5,e);a.speedMps=Lt(a.speedMps,Math.max(4,l),a.aggressive?2.4:1.8,e),a.z+=a.direction*a.speedMps*e,a.mesh.position.set(a.laneX,0,a.z),a.mesh.rotation.y=(a.isOncoming?Math.PI:0)+(a.laneGoal?(a.laneGoal-a.laneStart||0)*.01:0);const c=a.mesh.userData.headlights??[],u=a.mesh.userData.brakelights??[],d=Kt[this.weatherState.current].night??0;c.forEach(p=>{p.material.emissiveIntensity=this.player.headlights||d>.5?1.5+d*1.5:.15}),u.forEach(p=>{p.material.emissiveIntensity=1.1+a.brakeVisual*2.4+d*1.2});const f=a.z-this.player.z,m=Math.abs(a.laneX-this.player.x),g=a.size.length*.5+this.playerCar.userData.size.length*.38,v=a.size.width*.5+this.playerCar.userData.size.width*.42;Math.abs(f)<g&&m<v&&this.handleCollision(a,a.isOncoming?1.2:.9),!a.nearMissAwarded&&a.prevRelativeZ>2&&f<-2&&m<2.6&&m>v&&(a.nearMissAwarded=!0,this.handleNearMiss(a)),a.prevRelativeZ=f,!a.countedPass&&f<-6&&(a.countedPass=!0,a.type==="truck"&&(this.session.truckPasses+=1)),(f<-180||f>620)&&r.push(a)}),r.forEach(a=>{this.trafficGroup.remove(a.mesh),this.traffic.splice(this.traffic.indexOf(a),1)}),this.player.offroad&&this.player.speedMps>It(60)&&(this.dustTimer-=e,this.dustTimer<=0&&(this.spawnDust(),this.dustTimer=.04)),this.input.state.nitro>0&&this.player.speedMps>It(80)&&this.player.nitro>0&&this.spawnNitroParticles()}updatePolice(e){if(!this.session?.mode.police)return;this.session.wantedHeat+=e*(this.player.speedMps>It(150)?.16:.07)+(this.player.x<0?e*.06:0)+(this.session.nearMisses>0?e*.01:0),this.player.speedMps>It(210)&&(this.session.policeEscapeTime+=e),!this.police.some(a=>this.player.z-a.z<55&&this.player.z-a.z>-10)&&this.player.speedMps>It(185)&&(this.session.wantedHeat=Math.max(0,this.session.wantedHeat-e*.22));const n=this.session.wantedLevel;this.session.wantedLevel=Je(Math.ceil(this.session.wantedHeat),0,5),this.session.peakWantedLevel=Math.max(this.session.peakWantedLevel,this.session.wantedLevel),n>0&&this.session.wantedLevel===0&&(this.session.policeEscapeBonus+=900,this.pushEvent("Police escaped. Bonus awarded."));const s=this.session.wantedLevel===0?0:Math.min(5,1+this.session.wantedLevel);for(;this.police.length<s;)this.spawnPoliceVehicle(Math.random()<.5);this.session.roadblockCooldown-=e,this.session.roadblockCooldown<=0&&this.session.wantedLevel>=3&&(this.spawnRoadblock(),this.session.roadblockCooldown=ne(18,32));const r=[];this.police.forEach((a,o)=>{const l=16+o*7,c=this.player.z-l,u=o%2===0?0:en([-1,1])*this.road.laneWidth*.4,d=Je(this.player.x+a.targetOffset*.35+u,this.laneCenters[3],this.laneCenters[5]);if(a.laneX=Lt(a.laneX,d,1.6+this.session.wantedLevel*.4,e),a.z=Lt(a.z,c,.9+this.session.wantedLevel*.28,e)+a.speedMps*e*.25,a.speedMps=Lt(a.speedMps,this.player.speedMps+4+this.session.wantedLevel*2.5,1.8,e),a.mesh.position.set(a.laneX,0,a.z),a.mesh.userData.lightBar){const g=(Math.sin(performance.now()*.024+o)+1)*.5;a.mesh.userData.lightBar.material.emissive.setHex(g>.5?16729670:5482495)}const f=Math.abs(a.laneX-this.player.x),m=Math.abs(a.z-this.player.z);f<1.8&&m<4.2&&a.ramCooldown<=0&&(this.handleCollision(a,.8),a.ramCooldown=ne(1.2,2.5)),a.ramCooldown-=e,(a.z<this.player.z-220||a.z>this.player.z+180)&&r.push(a)}),r.forEach(a=>{this.policeGroup.remove(a.mesh),this.police.splice(this.police.indexOf(a),1)})}updatePlayer(e,t=!1){const n=this.getPerformanceSpec(),s=t?{accelerate:.65,brake:0,left:0,right:0,handbrake:0,nitro:0,horn:0}:this.input.state,r=(s.right||0)-(s.left||0),a=Kt[this.weatherState.current].wetness,l=7+(1-this.saveData.settings.steeringFilter)*12,c=8+this.saveData.settings.steerReturnSpeed*9;this.player.steerInput=Lt(this.player.steerInput,r,Math.abs(r)>.01?l:c,e);const u=n.maxSpeedMps+(s.nitro>0&&this.player.nitro>0?n.nitroBoost:0);t?this.player.speedMps=Lt(this.player.speedMps,It(105),.8,e):(s.accelerate>0?this.player.speedMps+=n.accel*s.accelerate*e:this.player.speedMps-=(4.2+this.player.speedMps*.02)*e,s.brake>0&&(this.player.speedMps-=n.brake*s.brake*e));const d=!t&&s.nitro>0&&this.player.nitro>.02&&this.player.speedMps>It(70);this.player.throttle=t?.45:s.accelerate||0,this.player.brakePressure=t?0:s.brake||0,d?(this.player.speedMps+=n.nitroBoost*e,this.player.nitro=Je(this.player.nitro-e*.17,0,n.nitroCapacity)):this.player.nitro=Je(this.player.nitro+e*.05,0,n.nitroCapacity),this.player.nitro=Je(this.player.nitro,0,n.nitroCapacity),this.player.speedMps=Je(this.player.speedMps,0,u);const f=s.handbrake>0&&!t,m=Je(this.player.speedMps/Math.max(1,n.maxSpeedMps),0,1),g=.7+n.driftAssist*.45,v=this.saveData.tuning.tractionControl?1:.88,p=n.grip*(f?.68:1)*(1-a*.22)*v,h=this.player.steerInput*(.52-m*.18)*this.saveData.settings.steerSensitivity*(f?1.12:1),T=h*n.steer*(1.04-m*.22)*(f?1.06+n.driftAssist*.24:1);this.player.lateralVelocity=Lt(this.player.lateralVelocity,T,p*(.78+m*.35),e),this.player.x+=this.player.lateralVelocity*e,this.player.x=Je(this.player.x,-this.road.roadWidth/2-this.road.shoulderWidth*.75,this.road.roadWidth/2+this.road.shoulderWidth*.75),this.player.offroad=Math.abs(this.player.x)>this.road.roadWidth/2-.9,this.player.offroad&&(this.player.speedMps*=1-e*(.7+a*.2),this.session&&(this.session.comboTimer=Math.max(0,this.session.comboTimer-e*.5))),this.player.slipAngle=Lt(this.player.slipAngle,f?h*g:this.player.lateralVelocity*.028,f?4.2+g:8.5,e),this.player.yaw=Lt(this.player.yaw,-h*.32-this.player.slipAngle*.52+(f?this.player.steerInput*.05:0),7.2,e),this.player.z+=this.player.speedMps*e,this.player.steering=Lt(this.player.steering,this.player.steerInput,Math.abs(r)>.01?l*.9:c*1.1,e),this.player.wheelSpin+=this.player.speedMps*e*2.6,this.player.reversing=!t&&s.brake>0&&s.accelerate<=0&&this.player.speedMps<It(10),(this.player.leftSignal||this.player.rightSignal)&&!this.player.hazard?(this.player.signalTimer+=e,(this.player.leftSignal&&this.player.steering<-.16||this.player.rightSignal&&this.player.steering>.16)&&(this.player.signalCommitted=!0),this.player.signalCommitted&&Math.abs(this.player.steering)<.08&&this.player.signalTimer>.9?(this.player.leftSignal=!1,this.player.rightSignal=!1,this.player.signalCommitted=!1,this.player.signalTimer=0):this.player.signalTimer>8&&(this.player.leftSignal=!1,this.player.rightSignal=!1,this.player.signalCommitted=!1,this.player.signalTimer=0)):this.player.hazard||(this.player.signalTimer=0,this.player.signalCommitted=!1),this.player.indicatorPhase=Math.sin(performance.now()*.018)>0,this.repositionPlayerCar(),this.playerCar.rotation.y+=f?this.player.steering*.022:0;const y=this.player.wheelSpin;this.playerCar.userData.wheels.forEach((M,R)=>{M.rotation.x=y,R<2&&(M.rotation.y=-this.player.steering*.46)}),this.playerCar.userData.steeringWheel.rotation.z=.18-this.player.steering*1.05;const D=Ar(this.player.speedMps),C=[0,3.5,2.4,1.82,1.45,1.2,.98,.82];let w=Je(Math.floor(D/34)+1,1,7);const I=this.player.speedMps/2.02;let S=900+I*C[w]*(135/this.saveData.tuning.gearRatio);for(;w<7&&S>6850;)w+=1,S=900+I*C[w]*(135/this.saveData.tuning.gearRatio);this.player.gear=w,this.player.rpm=Lt(this.player.rpm,Je(S+this.player.throttle*1100+(d?260:0)+Math.abs(this.player.steering)*160,850,7600),9,e),this.updateLights(e,s),this.audio.updateEngine({speedKph:D,rpm:this.player.rpm,nitroActive:d,weatherRain:Kt[this.weatherState.current].rain,policeActive:this.currentMode.police&&this.session?.wantedLevel>0,throttle:this.player.throttle,brake:this.player.brakePressure,gear:this.player.gear,hornActive:s.horn||0,indicatorActive:this.player.leftSignal||this.player.rightSignal||this.player.hazard,indicatorPhase:this.player.indicatorPhase,skidAmount:Je(Math.abs(this.player.slipAngle)*1.8+(f?.25:0),0,1)}),this.player.damage>.62&&this.engineSmokeAnchor&&this.session&&(this.smokeTimer-=e,this.smokeTimer<=0&&(this.spawnParticle({position:this.engineSmokeAnchor.getWorldPosition(this.tmpVec3),velocity:this.tmpVec4.set(ne(-.4,.4),ne(1.4,2.1),ne(-.2,.2)),life:1.1,scale:ne(.7,1.25),color:11778495,texture:"smoke",opacity:.42,gravity:-.2,drag:.97}),this.smokeTimer=.1))}updateLights(e,t=this.input.state){if(!this.playerCar)return;const n=Kt[this.weatherState.current].night,s=this.playerCar.userData.indicators,r=this.player.indicatorPhase,a=this.player.headlights||this.saveData.settings.autoHeadlights&&n>.45,o=t.brake>0?1.9+t.brake*2.4:1.15+n*1.3;this.playerCar.userData.headLights.forEach(c=>{c.material.emissiveIntensity=a?2.3+n:.45,c.material.color.set(this.saveData.customization.headlightColor),c.material.emissive.set(this.saveData.customization.headlightColor)}),this.playerCar.userData.brakeLights.forEach(c=>{c.material.emissiveIntensity=o}),s.frontLeft.material.emissiveIntensity=r&&(this.player.leftSignal||this.player.hazard)?3.2:.2,s.rearLeft.material.emissiveIntensity=r&&(this.player.leftSignal||this.player.hazard)?3.4:.25,s.frontRight.material.emissiveIntensity=r&&(this.player.rightSignal||this.player.hazard)?3.2:.2,s.rearRight.material.emissiveIntensity=r&&(this.player.rightSignal||this.player.hazard)?3.4:.25,s.reverseLeft.material.emissiveIntensity=this.player.reversing?2.2:.15,s.reverseRight.material.emissiveIntensity=this.player.reversing?2.2:.15,this.playerHeadlights.forEach((c,u)=>{c.intensity=a?2.2+n*2.4:0,c.distance=110+n*45+this.player.speedMps*.16,c.angle=Math.PI/(7.6-u*.22)});const l=t.nitro>0&&this.player.nitro>.02&&this.player.speedMps>It(70);this.nitroFlames.forEach(c=>{c.visible=l,c.scale.setScalar(l?ne(.8,1.35):.01),c.material.opacity=l?ne(.55,.9):0})}spawnDust(){const e=this.playerCar.position.clone(),t=Math.sign(this.player.x)||1;for(let n=0;n<2;n+=1)this.spawnParticle({position:new L(e.x-t*.9+ne(-.2,.2),.28,e.z-1.2+ne(-.5,.5)),velocity:new L(ne(-.6,.6),ne(.6,1.1),ne(-1.2,-.2)),life:.7,scale:ne(.8,1.3),color:11181703,texture:"smoke",opacity:.36,gravity:.18,drag:.94})}spawnNitroParticles(){const e=this.playerCar.getWorldPosition(new L);[-.42,.42].forEach(t=>{this.spawnParticle({position:new L(e.x+t,.35,e.z-2.5),velocity:new L(ne(-.2,.2),ne(-.05,.4),ne(-4.6,-2.5)),life:.25,scale:ne(.35,.58),color:8247807,texture:"flame",opacity:.9,gravity:-.2,drag:.9})})}handleNearMiss(e){if(!this.session)return;this.session.nearMisses+=1,this.session.closeCallStreak+=1,this.session.bestNearMissStreak=Math.max(this.session.bestNearMissStreak,this.session.closeCallStreak),this.session.combo=Je(this.session.combo+.28+(e.isOncoming?.12:0),1,6.5),this.session.bestCombo=Math.max(this.session.bestCombo,this.session.combo),this.session.comboTimer=1;let t=120+this.session.combo*32;e.isOncoming&&(t+=65),this.input.state.nitro>0&&(t+=55),this.session.score+=t,this.pushEvent(`Near miss +${Math.round(t)} (${this.session.combo.toFixed(1)}x combo)`)}handleCollision(e,t=1){if(!this.session||this.session.ended||this.session.runTime-(this.session.lastCollisionTime??-10)<1.1)return;this.session.lastCollisionTime=this.session.runTime,this.audio.pulseCrash(t),this.session.noCrash=!1,this.session.closeCallStreak=0,this.session.combo=1,this.session.comboTimer=.25,this.player.speedMps*=.42,this.player.damage=Je(this.player.damage+.16*t+this.player.speedMps*.0025,0,1),this.session.damage=this.player.damage,this.session.repairCost+=Math.round(220+this.player.damage*850),this.updateDamageVisuals();const n=e.mesh.position.clone().lerp(this.playerCar.position,.5);for(let r=0;r<12;r+=1)this.spawnParticle({position:n.clone().add(new L(ne(-.5,.5),ne(.25,.9),ne(-.7,.7))),velocity:new L(ne(-2.2,2.2),ne(.5,2.6),ne(-2.2,2.2)),life:ne(.3,.55),scale:ne(.22,.45),color:en([16765290,16747333,16777215]),texture:"spark",opacity:.95,gravity:4.2,drag:.88});for(let r=0;r<6;r+=1)this.spawnParticle({position:n.clone().add(new L(ne(-.6,.6),ne(.25,.9),ne(-.7,.7))),velocity:new L(ne(-1.2,1.2),ne(.8,1.7),ne(-1.3,1.3)),life:ne(.7,1.1),scale:ne(.6,1.2),color:12107204,texture:"smoke",opacity:.48,gravity:.4,drag:.95});this.pushEvent("Impact. Combo lost and repair costs increased."),(this.currentMode.hardcore||this.player.damage>=.98||this.currentMode.id==="delivery"&&this.player.damage>.84)&&this.startCrashReplay("Crash detected")}updateDamageVisuals(){if(!this.playerCar)return;const e=this.player.damage,t=this.playerCar.userData.damageParts;t.frontBumper.position.set(0,.48-e*.12,2.42-e*.05),t.frontBumper.rotation.z=-e*.08,t.rearBumper.position.set(0,.49-e*.05,-2.4),t.rearBumper.rotation.z=e*.05,t.headlightL.visible=e<.78,t.headlightR.visible=e<.88,t.greenhouse.material.opacity=.68-e*.18;const n=this.playerCar.userData.paintMaterial.userData.baseClearcoatRoughness??.06;this.playerCar.userData.paintMaterial.clearcoatRoughness=n+e*.38}findLeadVehicle(e,t){let n=null,s=1/0;return t.forEach(r=>{if(r===e||r.direction!==e.direction||Math.abs(r.laneX-e.laneX)>this.road.laneWidth*.48)return;const a=e.direction===1?r.z-e.z:e.z-r.z;a>0&&a<s&&(s=a,n=r)}),n?{entry:n,distance:s}:null}isLaneClear(e,t,n=18){return!this.traffic.some(s=>Math.abs(s.laneX-this.laneCenters[e])<this.road.laneWidth*.45&&Math.abs(s.z-t)<n)}updateRun(e){if(!this.session||this.phase==="paused")return;if(this.phase==="intro"){this.session.introTimer-=e,this.updatePlayer(e),this.updateRoad(e),this.updateTraffic(e),this.currentMode.police&&this.updatePolice(e),this.updateCamera(e,!0),this.updateWeather(e),this.updateRain(e),this.updateParticles(e),this.updateHUD(),this.session.introTimer<=0&&(this.phase="running");return}if(this.phase==="crashReplay"){this.session.crashReplayTimer-=e,this.updateRoad(e),this.updateTraffic(e*.35),this.updateParticles(e),this.updateRain(e*.7),this.updateCamera(e),this.updateWeather(e),this.session.crashReplayTimer<=0&&this.endRun(this.session.endReason??"Vehicle disabled",!1,!0);return}if(this.session.runTime+=e,this.session.timerRemaining=this.currentMode.timer>0?this.session.timerRemaining-e:0,this.session.weatherTimer-=e,["endless","career","free"].includes(this.currentMode.id)&&this.session.weatherTimer<=0){const u=en(["day","sunset","fog","rain"]);this.applyWeather(u),this.session.weatherTimer=ne(50,80),this.pushEvent(`Weather shifting to ${Sm(u)}.`)}this.updatePlayer(e),this.updateRoad(e),this.updateTraffic(e),this.currentMode.police&&this.updatePolice(e),this.updateWeather(e),this.updateRain(e),this.updateParticles(e),this.updateCamera(e);const t=Ar(this.player.speedMps);this.session.distanceM+=this.player.speedMps*e,this.session.distanceKm=this.session.distanceM/1e3,this.session.topSpeed=Math.max(this.session.topSpeed,t),this.session.averageSpeedAccumulator+=t,this.session.averageSpeedSamples+=1;const n=this.player.x<0&&["two-way","police","hardcore"].includes(this.currentMode.id);n&&t>90&&(this.session.wrongLaneTime+=e,this.session.combo=Je(this.session.combo+e*.05,1,6.5),this.session.bestCombo=Math.max(this.session.bestCombo,this.session.combo));const s=this.player.speedMps*3.8*e,r=this.player.speedMps*.42*e,a=n?1.35:1,o=["rain","storm","night","fog"].includes(this.weatherState.current)?1.14:1,l=this.cameraMode==="cockpit"?1.08:this.cameraMode==="hood"?1.04:1,c=(s+r)*this.session.combo*a*o*l*this.currentMode.reward;if(this.session.score+=c,this.session.displayMoney=this.estimateMoneyReward(),t>75?this.session.comboTimer=Je(this.session.comboTimer+e*.17,0,1):this.session.comboTimer=Je(this.session.comboTimer-e*.4,0,1),this.session.comboTimer<=.02&&(this.session.combo=Lt(this.session.combo,1,3.5,e),this.session.closeCallStreak=0),this.currentMode.id==="career"){const u=Oi.find(d=>this.saveData.missionProgress[d.id]<d.goal);u&&(this.session.objective=u.title)}else this.currentMode.timer>0&&(this.session.objective=`${this.getCurrentObjective(this.currentMode)} ${Math.max(0,this.session.timerRemaining).toFixed(0)}s`);if(this.currentMode.id==="delivery"&&this.player.damage>.84){this.startCrashReplay("Delivery failed"),this.updateHUD();return}if(this.currentMode.id==="free"&&this.player.damage>.98){this.endRun("Vehicle needs repairs",!1);return}if(this.currentMode.timer>0&&this.session.timerRemaining<=0){const u=this.currentMode.id==="delivery"?"Delivery complete":this.currentMode.id==="time-trial"?"Time trial complete":"Timer complete";this.endRun(u,!0);return}if(this.player.damage>=.98&&!this.currentMode.hardcore){this.startCrashReplay("Vehicle disabled"),this.updateHUD();return}this.updateHUD()}startCrashReplay(e){!this.session||this.phase==="crashReplay"||(this.phase="crashReplay",this.session.crashReplayTimer=2.8,this.session.endReason=e,this.cameraMode="cinematic",this.player.hazard=!0,this.pushEvent("Crash replay engaged."))}estimateMoneyReward(){if(!this.session)return 0;const e=this.session.averageSpeedSamples?this.session.averageSpeedAccumulator/this.session.averageSpeedSamples:0,t=this.session.distanceKm*185+this.session.score*.09+this.session.nearMisses*70+e*1.9+this.session.topSpeed*.8,n=this.currentMode.reward*(1+(this.session.noCrash?.15:0)+(["rain","storm"].includes(this.weatherState.current)?.08:0)+(this.cameraMode==="cockpit"?.05:0));return Math.max(0,Math.round(t*n+this.session.policeEscapeBonus))}updateHUD(){if(!this.session)return;const e=Ar(this.player.speedMps);this.ui.setHUD({modeName:this.currentMode.name,objective:this.session.objective,cameraName:this.getCameraLabel(this.cameraMode),wantedLevel:this.session.wantedLevel,speed:e,rpm:this.player.rpm,gear:this.player.gear,score:this.session.score,combo:this.session.combo,money:this.session.displayMoney,distance:this.session.distanceKm,topSpeed:this.session.topSpeed,nitro:this.player.nitro/(this.getPerformanceSpec().nitroCapacity||1),damage:this.player.damage,comboTimer:this.session.comboTimer}),this.ui.drawMiniMap({x:this.player.x,z:this.player.z,laneX:this.player.x/this.road.laneWidth,laneWidth:this.road.laneWidth},this.traffic,this.police,this.saveData.settings.showMap)}updateRoad(e){this.road.segments.forEach(t=>{t.position.z+this.road.segmentLength*.5<this.player.z-this.road.segmentLength*5&&(t.position.z+=this.road.segmentLength*this.road.segmentCount)}),this.cloudGroup.children.forEach((t,n)=>{t.position.z+=e*t.userData.drift*8,t.position.x+=Math.sin(this.player.z*8e-4+n)*e*.8,t.position.z>this.player.z+720&&(t.position.z=this.player.z-720)})}updateParticles(e){this.particles.forEach(t=>{if(t.life<=0)return;if(t.life-=e,t.life<=0){t.sprite.visible=!1,t.sprite.material.opacity=0;return}t.velocity.multiplyScalar(Math.pow(t.drag,e*60)),t.velocity.y-=t.gravity*e,t.sprite.position.addScaledVector(t.velocity,e);const n=t.life/t.maxLife;t.sprite.material.opacity=n*.8,t.sprite.scale.multiplyScalar(1+e*.42)})}updateCamera(e,t=!1){const n=this.saveData.settings.cameraShake*Je(this.player.speedMps/It(260),0,1);this.tmpVec.set(Math.sin(performance.now()*.018)*n*.08,Math.cos(performance.now()*.026)*n*.05,0);const s=this.playerCar?.userData?.cameraAnchors;if(this.playerCar?.userData?.glassMaterial&&(Yo(this.playerCar.userData.glassMaterial,this.saveData.customization.windowTint,!1),this.playerCar.userData.glassMaterial.opacity*=1-this.player.damage*.22),this.phase==="menu"){const a=this.cameras.orbit,o=6.8,l=performance.now()*18e-5;a.position.set(this.playerCar.position.x+Math.cos(l)*o,2.45+Math.sin(l*1.6)*.25,this.playerCar.position.z+Math.sin(l)*o),a.lookAt(this.playerCar.position.x,1.05,this.playerCar.position.z),this.activeCamera=a;return}if(this.cameraMode==="cinematic"||t||this.phase==="crashReplay"){const a=this.cameras.cinematic,o=performance.now()*.0014,l=t?9.4:8.1;a.position.set(this.player.x+Math.sin(o)*l,t?2.9:2.35+Math.sin(o*1.2)*.35,this.player.z+Math.cos(o)*l*(t?1:.55)),a.lookAt(this.player.x,1.1,this.player.z+(t?16:1)),this.activeCamera=a,this.ui.toggleCockpit(!1,0,Je(this.player.damage*1.1,0,.75));return}if(this.cameraMode==="cockpit"){const a=this.cameras.cockpit;Yo(this.playerCar.userData.glassMaterial,this.saveData.customization.windowTint,!0),this.playerCar.userData.glassMaterial.opacity*=1-this.player.damage*.22,s.cockpitAnchor.getWorldPosition(this.cameraPosition),s.cockpitLookTarget.getWorldPosition(this.cameraTarget),this.cameraTarget.x+=this.player.steering*1.25,this.cameraTarget.z+=Je(this.player.speedMps*.12,0,8),this.cameraPosition.add(this.tmpVec),a.position.lerp(this.cameraPosition,1-Math.exp(-14*e)),a.lookAt(this.cameraTarget),this.activeCamera=a,this.ui.toggleCockpit(!0,Je(Kt[this.weatherState.current].rain*.3+this.player.speedMps*.0012,0,.72),Je(this.player.damage*1.1,0,.78));return}if(this.cameraMode==="hood"){const a=this.cameras.hood;s.hoodAnchor.getWorldPosition(this.cameraPosition),s.hoodLookTarget.getWorldPosition(this.cameraTarget),this.cameraTarget.x+=this.player.steering*1.9,this.cameraPosition.addScaledVector(this.tmpVec,.9),a.position.lerp(this.cameraPosition,1-Math.exp(-12*e)),a.lookAt(this.cameraTarget),this.activeCamera=a,this.ui.toggleCockpit(!1);return}const r=this.cameras.chase;s.chaseAnchor.getWorldPosition(this.cameraTarget),this.cameraPosition.set(this.player.x+this.player.steering*-1.15,1.85+n*.28,this.player.z-5.9-Je(this.player.speedMps/It(260),0,1)*1.6),r.position.lerp(this.cameraPosition,1-Math.exp(-5.6*e)),this.cameraTarget.y+=.05,this.cameraTarget.z+=9+Je(this.player.speedMps/It(260),0,1)*8,r.lookAt(this.cameraTarget),r.position.add(this.tmpVec),this.activeCamera=r,this.ui.toggleCockpit(!1)}recordLeaderboardEntry(e){const t=pm({nickname:this.session.nickname,modeId:this.currentMode.id,modeName:this.currentMode.name,score:e.score,distanceKm:e.distance,topSpeed:e.topSpeed,nearMisses:e.nearMisses,bestCombo:e.bestCombo,createdAt:new Date().toISOString()});return this.leaderboard=t.entries,this.ui.renderLeaderboard(this.leaderboard),t}endRun(e,t=!1,n=!1){if(!this.session||this.session.ended)return;this.session.ended=!0,this.pauseSettingsOpen=!1;const s=this.session.averageSpeedSamples?this.session.averageSpeedAccumulator/this.session.averageSpeedSamples:0,r=this.estimateMoneyReward(),a=Math.round(this.session.repairCost+this.player.damage*1100),o=Math.max(0,r-a);this.saveData.money+=o,this.saveData.stats.totalMoneyEarned+=r,this.saveData.stats.totalDistanceKm+=this.session.distanceKm,this.saveData.stats.totalNearMisses+=this.session.nearMisses,this.saveData.stats.totalRuns+=1,this.saveData.stats.bestScore=Math.max(this.saveData.stats.bestScore,Math.round(this.session.score)),this.saveData.stats.bestSpeed=Math.max(this.saveData.stats.bestSpeed,Math.round(this.session.topSpeed)),this.updateProgression(o),this.updateMissionProgress(t),this.updateAchievements(),Qt(this.saveData),this.refreshUI();const l={score:this.session.score,distance:this.session.distanceKm,topSpeed:this.session.topSpeed,nearMisses:this.session.nearMisses,averageSpeed:s,bestCombo:this.session.bestCombo,repairCost:a,moneyEarned:o},c=this.recordLeaderboardEntry(l);this.ui.showResults({title:e,nickname:this.session.nickname,leaderboardRank:c.rank,...l}),this.phase="results",this.cameraMode=n?"cinematic":"orbit",this.ui.toggleHUD(!1),this.ui.togglePause(!1),this.ui.toggleResults(!0),this.ui.toggleMenu(!1),this.ui.setPauseSettingsOpen(!1),this.player.hazard=!1,this.audio.setSceneState({menu:!0,paused:!1,running:!1})}updateProgression(e){const t=Math.round(this.session.score*.08+this.session.distanceKm*120+this.session.nearMisses*18);this.saveData.xp+=t;const n=()=>this.saveData.level*1800;for(;this.saveData.xp>=n();)this.saveData.xp-=n(),this.saveData.level+=1,this.saveData.level%3===0&&(this.saveData.unlockedRoutes+=1),this.saveData.money+=1200,this.pushEvent(`Level up! Driver level ${this.saveData.level}.`);this.saveData.money=Math.max(0,this.saveData.money)}updateMissionProgress(e){const t=this.saveData.missionProgress;t.m1=Math.max(t.m1,this.session.noCrash?this.session.distanceKm:t.m1),t.m2=Math.max(t.m2,this.session.topSpeed),t.m3=Math.max(t.m3,this.session.nearMisses),t.m4=Math.max(t.m4,this.session.policeEscapeTime),t.m5=Math.max(t.m5,this.currentMode.id==="night"&&this.player.headlights&&this.session.distanceKm>1?1:t.m5),t.m6=Math.max(t.m6,["rain","storm"].includes(this.weatherState.current)?this.session.distanceKm:t.m6),t.m7=Math.max(t.m7,this.session.truckPasses),t.m8=Math.max(t.m8,this.session.bestCombo),t.m9=Math.max(t.m9,this.currentMode.id==="time-trial"&&e?1:t.m9),t.m10=Math.max(t.m10,this.session.wrongLaneTime),Oi.forEach(n=>{t[n.id]>=n.goal&&!this.saveData.completedMissionRewards?.includes(n.id)&&(this.saveData.money+=n.reward,this.saveData.completedMissionRewards=this.saveData.completedMissionRewards??[],this.saveData.completedMissionRewards.push(n.id),this.pushEvent(`Mission complete: ${n.title}`))})}updateAchievements(){const e=this.saveData.stats,t=this.saveData.achievements;e.totalDistanceKm>=10&&(t.a1=!0),this.session.bestNearMissStreak>=5&&(t.a2=!0),this.currentMode.id==="night"&&this.player.headlights&&this.session.distanceKm>1&&(t.a3=!0),this.currentMode.id==="police"&&this.session.peakWantedLevel>=3&&this.session.policeEscapeBonus>0&&(t.a4=!0)}updateAmbient(e){for(this.updatePlayer(e,!0),this.updateRoad(e),this.updateWeather(e),this.updateRain(e),this.updateCamera(e);this.traffic.length<8;)this.spawnTrafficVehicle(!1,null,null,!1);const t=[];this.traffic.forEach(n=>{n.z+=n.direction*n.speedMps*e,n.mesh.position.set(n.laneX,0,n.z);const s=n.z-this.player.z;(s<-180||s>620)&&t.push(n)}),t.forEach(n=>{this.trafficGroup.remove(n.mesh),this.traffic.splice(this.traffic.indexOf(n),1)})}animate(){requestAnimationFrame(()=>this.animate());const e=performance.now();let t=(e-this.lastTick)/1e3;this.lastTick=e,t=Math.min(t,.05),this.input.pollGamepad(),this.handleActions(),this.phase==="menu"||this.phase==="results"?this.updateAmbient(t):(this.phase==="running"||this.phase==="intro"||this.phase==="crashReplay")&&this.updateRun(t),this.phase==="paused"&&this.updateCamera(t),this.renderPass.camera=this.activeCamera,this.composer.render()}}const Tm=new Em({canvas:document.getElementById("game-canvas"),touchRoot:document.getElementById("touch-controls")});Tm.init();
