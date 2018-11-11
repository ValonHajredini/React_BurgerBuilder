import React, { Component} from 'react';
import cssStyle from './BurgerIngredient.css'
import PropTypes from 'prop-types';
class BurgerIngredient extends Component {
    render() {
            let ingredient = null;
            switch (this.props.type){
                case ('bred-bottom'):
                    ingredient = <div className={cssStyle.BreadBottom}>

                    </div>;
                    break;
                case ('bred-top'):
                    ingredient= (
                        <div className={cssStyle.BreadTop}>
                            <div className={cssStyle.Seeds1}>
                            </div>
                            <div className={cssStyle.Seeds2}>
                            </div>
                        </div>
                    );
                    break;
                case ('meat'):
                    ingredient = <div className={cssStyle.Meat}>
                    </div>;
                    break;
                case ('cheese'):
                    ingredient = <div className={cssStyle.Cheese}>
                    </div>;
                    break;
                case ('salad'):
                    ingredient = <div className={cssStyle.Salad}>
                    </div>;
                    break;
                case ('bacon'):
                    ingredient = <div className={cssStyle.Bacon}>
                    </div>;
                    break;
                default:
                    ingredient = null;
                    break;

            }
            return ingredient;
    }
}
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default BurgerIngredient;