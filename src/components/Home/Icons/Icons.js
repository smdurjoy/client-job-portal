import React from 'react';
import diamond from '../../../images/diamond.svg';
import leaf from '../../../images/leaf.svg';
import atom from '../../../images/atom.svg';
import cell from '../../../images/cell.svg';
import ecology from '../../../images/ecology.svg';

const Icons = () => {
    return (
        <div className="icons">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={diamond} alt="daimond"/>
                            <span>DIAMOND</span>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={leaf} alt="leaf"/>
                            <span>LEAF</span>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={atom} alt="atom"/>
                            <span>PHYSICS</span>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={cell} alt="cell"/>
                            <span>CELL</span>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={ecology} alt="ecology"/>
                            <span>ECOLOGY</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Icons;