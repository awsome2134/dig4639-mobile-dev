(this.webpackJsonpw6a=this.webpackJsonpw6a||[]).push([[0],{10:function(e,t,r){"use strict";r.r(t);var a=r(8),n=r(1),s=r(2),i=r(4),u=r(3),c=r(5),l=r(0),o=r.n(l),h=r(7),m=r.n(h);r(15);function d(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3)),o.a.createElement("div",{className:"board-row"},this.renderSquare(4),this.renderSquare(5),this.renderSquare(6),this.renderSquare(7)),o.a.createElement("div",{className:"board-row"},this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11)),o.a.createElement("div",{className:"board-row"},this.renderSquare(12),this.renderSquare(13),this.renderSquare(14),this.renderSquare(15)))}}]),t}(o.a.Component),b=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={history:[{squares:Array(16).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(c.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();q(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=q(a.squares),s=r.map((function(e,r){var a=r?"Go to move #"+r:"Go to game start";return o.a.createElement("li",{key:r},o.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},a))}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(v,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,e),o.a.createElement("ol",null,s)))}}]),t}(o.a.Component);function q(e){for(var t=[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15],[0,5,10,15],[3,6,9,12],[0,3,12,15],[5,6,9,10]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],4),s=n[0],i=n[1],u=n[2],c=n[3];if(e[s]&&e[s]===e[i]&&e[s]===e[u]&&e[s]===e[c])return e[s]}return null}m.a.render(o.a.createElement(b,null),document.getElementById("root"))},15:function(e,t,r){},9:function(e,t,r){e.exports=r(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.a5d94a0a.chunk.js.map