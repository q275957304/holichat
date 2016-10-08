import React, {Component, PropTypes} from 'react'
import Slider from '../Common/Slider/'
import Header from '../Common/Header/'
import './theme/index.css'

import activityIcon from '../../images/activity_icon.png'
import eventIcon from '../../images/event_icon.png'
import trainingIcon from '../../images/training_icon.png'

class Home extends Component {
    componentWillMount() {
        console.log('加载HOME')
    }
    render() {
        return (
            <div className="wx_home gary_bj">
				<Header title="活力圈" leftTo="fanhui" />
                <Slider source='' />
				<div className="weui-flex nav white_bj">
					<div className="weui-flex__item" key="fujing"><img className="nav_img" src={activityIcon} /> <div className="nav_name">附近</div></div>
					<div className="weui-flex__item" key="huodong"><img className="nav_img" src={eventIcon} /> <div className="nav_name">活动</div></div>
					<div className="weui-flex__item" key="shuaishi"><img className="nav_img" src={trainingIcon} /> <div className="nav_name">赛事</div></div>
					<div className="weui-flex__item" key="pixung"><img className="nav_img" src={activityIcon} /> <div className="nav_name">培训</div></div>
					<div className="weui-flex__item" key="zhixun"><img className="nav_img" src={activityIcon} /> <div className="nav_name">资讯</div></div>
				</div>
                <div>活力圈</div>
            </div>
        );
    }
}

export default Home
