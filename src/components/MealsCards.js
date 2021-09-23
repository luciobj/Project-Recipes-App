import React, {useContext} from "react";
import { Redirect } from "react-router";
import RecipesContext from '../context/recipesContext';

function MealsCards() {
    const { meals } = useContext(RecipesContext);

    if (meals === null || meals === undefined) return global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
    if (meals.length === 1) {
        return(
            <Redirect to={`/comidas/${meals[0].idMeal}`} />
        );
    }
    
    return(
        <div>
            {meals.map(({idMeal, strMealThumb, strMeal}, index) => {
                return <div 
                  data-testid={`${index}-recipe-card`}
                  key={idMeal}
                >
                    <img 
                    src={strMealThumb} 
                    alt={strMeal} 
                    data-testid={`${index}-card-img`}
                    />
                    <h3 data-testid={`${index}-card-name`}>{strMeal}</h3>
                </div>
            }).slice(0, 12)}
        </div>
    );
}

export default MealsCards;
