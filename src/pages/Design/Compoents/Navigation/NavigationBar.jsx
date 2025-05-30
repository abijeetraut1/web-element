import LOGO from "../../../../assets/logo/logo.png";
import { Link } from 'react-router-dom';
import profileImage from "../../../../assets/test/cover.png";
import Button from '../../../../Components/Buttons/Button';
import Profile from '../../../../Components/Profile/Profile';

export default function NavigationBar() {

    return (
        <header className='w-full ' >
            <nav className="px-2 flex items-center justify-between sm:py-0 lg:px-8">
                <div className="flex lg:flex ">
                    <Link to="/" className="flex items-center -m-1.5 p-1.5">
                        <div>
                            <img
                                className="h-10 w-auto"
                                src={LOGO}
                                alt=""
                            />
                        </div>
                    </Link>
                </div>

                <div className="hidden lg:flex lg:gap-x-3">
                    <div>
                        <Button buttonName='Save' />
                    </div>
                    <div>
                        <Button buttonName='Host' />
                    </div>
                    <div>
                        <Profile name="Abijeet Raut" imageLink={profileImage} alt="Cannot find profile" />
                    </div>
                </div>
            </nav>
        </header>
    );
}
