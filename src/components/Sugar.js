import React from "react"
import {Link} from "react-router-dom";

export function Sugar({sugar, sugarClass}){
    return (
        <section className='sugar'>
            <div className={"sugar__container" + " " + sugarClass}>
                <div className="sugar__items">
                    {sugar.map(sugarItem=>{
                        if(sugarItem.href !== ''){
                            return (
                                <>
                                    <div className='sugar__item'><Link to={sugarItem.href}><a>{sugarItem.title}</a></Link></div><span>/</span>
                                </>
                            )
                        }
                        return (
                            <div className='sugar__item'>{sugarItem.title}</div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
