export const View = () => {
    return <div>
        <div className="listingViewLayout">
            <div className="media">
                <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />
                
                <span className="slides">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                </span>
            </div>
            <div className="content">
                <div className="details">
                    <span>
                        In the bleh bleh is our housing units with bleh bleh. All this from 2.5 km from the Central Business District
                    </span>
                    <div className="basics">
                        

                    </div>
                    <ul>
                        <li>

                            Gym
                        </li>
                        <li>
                            Pool
                        </li>

                        <li>
                            CCTV
                        </li>

                        <li>
                            High speed Lift
                        </li>

                        <li>
                            Intercom
                        </li>

                        <li>
                            Internet ready
                        </li>

                    </ul>
                </div>
                <div className="contacts">
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="tel" placeholder="Phone Number" />
                        <textarea>

                        </textarea>
                    </form>
                </div>

            </div>
        </div>
    </div>
}