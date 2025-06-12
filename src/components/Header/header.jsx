import './header.css';

//header component
function Header({ score, bestScore }) {
    return (
        <>
        <header>

            <div id='header-top'>
                <h1>Pokemon Memory Game</h1>
                <div id='score-container'>
                    <p>Score: {score}</p>
                    <p>Best Score: {bestScore}</p>
                </div>
            </div>

            <p>
                Get points by clicking on an image but don't click on any more than once!
            </p>
        </header>
        </>
    )
}

export default Header;