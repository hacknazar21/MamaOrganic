import React, {createContext, useContext, useState} from "react"
import {Header} from "../components/Index/Header";
import Footer from "../components/Index/Footer";
import {HeaderContext} from "../context/HeaderContext";
import {useStorage} from "../hooks/hooks.storage";
import {useDynamicAdaptive} from "../hooks/hooks.dynamicadaptive";
export function MainLayout(props){
    const [basket, setBasket] = useState(null)
    const {add, get, removeById, storageLength} = useStorage('basket')
    const {addDynamicRefs} = useDynamicAdaptive()
        return (
            <HeaderContext.Provider value={{basket: basket, add, get, removeById, storageLength, addDynamicRefs }}>
                <Header basket={setBasket}/>
                    {props.children}
                <Footer />
            </HeaderContext.Provider>
        )
}