import React, {createContext, useState, useContext } from "react";
// import {IngredientsContext} from "../context/IngredientsContext";
import {v4} from "uuid";


const IngredientsContext = createContext();
export const useIngredients = () => useContext(IngredientsContext);