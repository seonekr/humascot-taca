import './board.css'
import { IoDocumentText } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { TbShoppingCartStar } from "react-icons/tb";
import graph from '../../../img/graph.png';

const Board = () => {
    return(
        <>
            <section>
                <div className="board">
                    <div className="manage-target">
                        <div className="manage">
                            <div className='menu-box one'>
                                <div><IoDocumentText/><p>Porduct</p></div>
                                <h3>5</h3>
                                <p>View products</p>
                            </div>
                            <div className='menu-box two'>
                                <div><IoDocumentText/><p>Porduct</p></div>
                                <h3>15</h3>
                                <p>View products</p>
                            </div>
                            <div className='menu-box three'>
                                <div><IoDocumentText/><p>Porduct</p></div>
                                <h3>25</h3>
                                <p>View products</p>
                            </div>
                            <div className='menu-box four'>
                                <div><IoDocumentText/><p>Porduct</p></div>
                                <h3>15</h3>
                                <p>View products</p>
                            </div>
                        </div>
                        <div className="target">
                            <h2>Target vs Reality</h2>
                            <div className='target-graph'><img src={graph} alt="" /></div>
                            <div className="reality">
                                <p className='bag'><BsHandbagFill/></p>
                                <span>
                                    <h4>Reality</h4>
                                    <p>Global</p>
                                </span>
                                <p className='number'>8.822</p>
                            </div>
                            <div className="target-sale">
                                <p className='sale'><TbShoppingCartStar/></p>
                                <span>
                                    <h4>Reality</h4>
                                    <p>Global</p>
                                </span>
                                <p className='number'>12.122</p>
                            </div>
                        </div>
                    </div>
                    <div className="products-visit">
                        <div className="products">
                            <h3>Top products</h3>
                            <div className="items">
                                <h4>#</h4>
                                <h4>name</h4>
                                <h4>Popularity</h4>
                                <h4>Sales</h4>
                            </div>
                            <div className="items">
                                <span>1</span>
                                <span>ttt</span>
                                <span>------</span>
                                <span>%%</span>
                            </div>
                            <div className="items">
                                <span>1</span>
                                <span>ttt</span>
                                <span>------</span>
                                <span>%%</span>
                            </div>
                            <div className="items">
                                <span>1</span>
                                <span>ttt</span>
                                <span>------</span>
                                <span>%%</span>
                            </div>
                            <div className="items">
                                <span>1</span>
                                <span>ttt</span>
                                <span>------</span>
                                <span>%%</span>
                            </div>
                        </div>
                        <div className="visit">
                            <h3>Visitor insights</h3>
                            <div className="visitor-graph">
                                <img src={graph} alt="" />
                            </div>
                            <div className="detial">
                                <span><p className='blue'></p>ble</span>
                                <span><p className='red'></p>red</span>
                                <span><p className='green'></p>green</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Board