import React ,{Component}from 'react';
import classes from './Dashboard.module.css';

import NavBar from './Containers/Navbar/Navbar';
import LinkList from './Components/LinkList/LinkList';
import LinkDetails from './Components/LinkDetails/LinkDetails';
import MainDisplay from './hoc/MainDispay';

import SideDisplay from './Containers/SideDisplay/SideDisplay'

import * as AuthActionTypes from '../Store/Actions/Auth';
import * as DashboardActionTypes from '../Store/Actions/Dashboard';
import { connect } from 'react-redux'
import CreateLink from '../Homepage/components/CreateLink/CreateLink';

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            sideDisplay : false,
            create : {
                name : {
                    value : ''
                },
                url : {
                    value : ''
                },
                short_url : {
                    value : ''
                }
            }
        }
    }

    onSelectIndex = (index) => {
        this.props.selectIndex(index)
    }

    onSideToggle = (value) => {
        this.setState ( (prev) => {
            return {
                ...prev,
                sideDisplay : value
            }
        })
    }

    onBlurOfUrl = () => {
       this.setState( (prev) => {
           const gen = this.generateKey(8)
           return {
               ...prev,
               create :{
                   ...prev.create,
                   short_url:{
                    ...prev.create.short_url,
                    value : gen
                   }
               }
           }
       } ) 
    }

    onChangeHandler = (event,id) => {
        event.persist()
        this.setState( (prev) => {
            return {
                ...prev,
                create :{
                    ...prev.create,
                    [id] : {
                        ...prev.create[id],
                        value : event.target.value

                    }
                }
            }
        } ) 
    } 

    onLinkCreateClicked = () => {
        const LinkData = {
            Name : this.state.create.name.value,
            Date : `${Date.now()}`,
            ShortenedURL : this.state.create.short_url.value,
            OriginalURL : this.state.create.url.value
        }
        this.props.createLink(LinkData)
    }

    generateKey = (length) => {
        let result           = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    render () {

        return (
            <div style={{position:'relative'}}>
                <NavBar logOut={this.props.logOut} onSideToggle={() => this.props.setBackdrop(true)} />
                <div className={classes['main-section']}>
                    <LinkList links={this.props.links} onSelect={this.onSelectIndex}/>
                    <MainDisplay className={classes['MainDisplay-details-content']}>
                        {this.props.links ? <LinkDetails link={this.props.links[this.props.selected]} />
                            : <p>Please , Select Links</p> }
                    </MainDisplay>
                    {this.props.create.backDrop ? 
                        <SideDisplay onSideToggle={() => this.props.setBackdrop(false)}> 
                            <CreateLink
                            error={this.props.create.error}
                            linkValue={this.state.create} 
                            onChangeHandler={this.onChangeHandler}
                            onLinkCreateClicked={this.onLinkCreateClicked}
                            onBlurOfUrl={this.onBlurOfUrl} />
                        </SideDisplay> 
                     : null}
                    {this.props.mobileViewVisible ? 
                        <SideDisplay onSideToggle={() => this.props.closeDetailsMenu()}> 
                            {this.props.links ? <LinkDetails link={this.props.links[this.props.selected]} />
                            : <p>Please , Select Links</p> }                
                        </SideDisplay> : null
                    }
                </div>
                
            </div>
            
        )
    }
    componentDidMount(){
        this.props.getAllLinks();
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        logOut : () => dispatch(AuthActionTypes.AuthLogout()),
        getAllLinks : () => dispatch(DashboardActionTypes.fetchAllLinksAsync()),
        selectIndex : (index) => dispatch(DashboardActionTypes.selectIndex(index)),
        createLink : (LinkData) => dispatch(DashboardActionTypes.createLinkStartAsync(LinkData)),
        setBackdrop : (value) => dispatch(DashboardActionTypes.setBackDrop(value)),
        closeDetailsMenu : () => dispatch(DashboardActionTypes.closeDetailsMobile())
     } 
}

const mapPropsToState = state => {
    return {
        links : state.dashboard.links.links,
        selected : state.dashboard.links.selected,
        create : state.dashboard.create,
        mobileViewVisible : state.dashboard.links.detailsVisible
    }
}


export default connect(mapPropsToState,mapPropsToDispatch)(Dashboard);