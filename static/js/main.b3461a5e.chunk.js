(this["webpackJsonpresume-website"]=this["webpackJsonpresume-website"]||[]).push([[0],{18:function(e,t,n){e.exports={MsgBox:"MsgBox_MsgBox__3bVf1",message:"MsgBox_message__2qY30"}},19:function(e,t,n){e.exports={Welcome:"Welcome_Welcome__3EPr1",stack:"Welcome_stack__2QndR"}},29:function(e,t,n){},30:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(6),i=n.n(c),o=(n(29),n(30),n(10)),u=n(11),r=n(5),d=n(14),l=n(13),h=n(19),p=n.n(h),f=n(4),j=n.n(f),x=n(50),v=n(1);function b(e){return Object(v.jsxs)("div",{className:j.a.InputBox,"data-testid":"InputBox",children:[Object(v.jsx)("div",{className:""!==e.value||e.focused?"".concat(j.a.inputBorder," ").concat(j.a.fadeOut):"".concat(j.a.inputBorder," ").concat(j.a.fadeIn)}),Object(v.jsx)(x.a,{className:j.a.Input,inputProps:{style:{textAlign:"center"}},disableUnderline:!0,fullWidth:!0,sx:{fontSize:"clamp(48px,7vw,120px)"},value:e.value,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur})]})}b.defaultProps={};var m=n(18),g=n.n(m),O=(n(38),n(51)),_=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={transition:!0,child:a.props.children[a.props.activeChild]},a.nodeRef=s.a.createRef(),a.updateMsg=a.updateMsg.bind(Object(r.a)(a)),a}return Object(u.a)(n,[{key:"updateMsg",value:function(){var e=this;this.setState({transition:!1}),setTimeout((function(){e.setState({child:e.props.children[e.props.activeChild],transition:!0})}),500)}},{key:"componentDidUpdate",value:function(e){e.activeChild!==this.props.activeChild&&this.updateMsg()}},{key:"render",value:function(){return Object(v.jsx)("div",{className:g.a.MsgBox,"data-testid":"MsgBox",children:Object(v.jsx)(O.a,{appear:!0,nodeRef:this.nodeRef,in:this.state.transition,timeout:2e3,classNames:"msg",children:Object(v.jsx)("span",{className:g.a.message,ref:this.nodeRef,children:this.state.child})})})}}]),n}(a.Component),B=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={value:"",inputFocused:!1,activeChild:0},e.msgRef=s.a.createRef(),e.handleChange=e.handleChange.bind(Object(r.a)(e)),e}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;this.msgRef.current.props.children.forEach((function(t,n){setTimeout((function(){e.setState({activeChild:n})}),3e3*n)}))}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:p.a.Welcome,"data-testid":"Welcome",children:[Object(v.jsxs)(_,{ref:this.msgRef,activeChild:this.state.activeChild,children:[Object(v.jsx)("span",{children:"Hello!"}),Object(v.jsx)("span",{children:"Welcome to Michael Bilyk's website"}),Object(v.jsxs)("span",{children:["Type ",Object(v.jsx)("strong",{children:"Hello"})," to enter"]})]}),Object(v.jsx)(b,{onChange:this.handleChange,onBlur:function(){e.setState({inputFocused:!1})},onFocus:function(){e.setState({inputFocused:!0})},value:this.state.value,focused:this.state.inputFocused})]})}}]),n}(a.Component);var C=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)(B,{})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),I()},4:function(e,t,n){e.exports={InputBox:"InputBox_InputBox__2BhL6",Input:"InputBox_Input__IIzjT",inputBorder:"InputBox_inputBorder__XCROo",fadeIn:"InputBox_fadeIn__WdxUr",fadeOut:"InputBox_fadeOut__2lYLM"}}},[[39,1,2]]]);
//# sourceMappingURL=main.b3461a5e.chunk.js.map