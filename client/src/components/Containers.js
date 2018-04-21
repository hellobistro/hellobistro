import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App';
import CustomerApp from './CustomerApp/CustomerApp';
import RestaurantApp from './RestaurantApp/RestaurantApp';
import RestaurantLogin from './RestaurantApp/RestaurantLogin';
import ConfirmOrder from './CustomerApp/ConfirmOrder';
import CustomerLogin from './CustomerApp/CustomerLogin';
import FindRestaurants from './CustomerApp/FindRestaurants';
import Menu from './CustomerApp/Menu';
import Order from './CustomerApp/Order';
import Orders from './CustomerApp/Orders';
import OrderStatus from './CustomerApp/OrderStatus';
import Restaurant from './CustomerApp/Restaurant';
import RestaurantList from './CustomerApp/RestaurantList';
import DashBoard from './RestaurantApp/DashBoard';
import MenuManager from './RestaurantApp/MenuManager';
import Promos from './RestaurantApp/Promos';
import RestaurantRegister from './RestaurantApp/RestaurantRegister';
import RestaurantSettings from './RestaurantApp/RestaurantSettings';
import CustomerRegister from './CustomerApp/CustomerRegister';
import CustomerSettings from './CustomerApp/CustomerSettings';


function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export const CustomerAppContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerApp);
export const RestaurantAppContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantApp);
export const RestaurantLoginContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantLogin);
export const ConfirmOrderContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder);
export const CustomerLoginContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerLogin);
export const FindRestaurantsContainer = connect(mapStateToProps, mapDispatchToProps)(FindRestaurants);
export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
export const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);
export const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders);
export const OrderStatusContainer = connect(mapStateToProps, mapDispatchToProps)(OrderStatus);
export const RestaurantContainer = connect(mapStateToProps, mapDispatchToProps)(Restaurant);
export const RestaurantListContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
export const DashBoardContainer = connect(mapStateToProps, mapDispatchToProps)(DashBoard);
export const MenuManagerContainer = connect(mapStateToProps, mapDispatchToProps)(MenuManager);
export const PromosContainer = connect(mapStateToProps, mapDispatchToProps)(Promos);
export const RestaurantRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantRegister);
export const RestaurantSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantSettings);
export const CustomerRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerRegister);
export const CustomerSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerSettings);