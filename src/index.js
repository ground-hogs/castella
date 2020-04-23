var {h} = require('snabbdom/h')
var init = require('snabbdom-to-html/init')
var modules = require('snabbdom-to-html/modules')
var toHTML = init([
  modules.class,
  modules.props,
  modules.attributes,
  modules.style
])

class Castella
{
    constructor(vdom){
        this.vdom = vdom;
    }

    unwrap(){
        return {
            ...this.vdom
        };
    }

    toString(){
        return toHTML(this.vdom);
    }
}

Castella.Render = function(tag, props={}, children=[]){
    if(tag instanceof Function){
        return Castella.Render(
            tag({
                props,
                children
            })
        );
    }
    else if(tag instanceof Castella){
        return tag; // fick das
    }
    else{
        return new Castella(
            h(
                tag, 
                { props }, 
                 ...children
                    .map(child => child instanceof Castella? child.unwrap() : child)   
            )
        );
    }
}

module.exports = Castella;