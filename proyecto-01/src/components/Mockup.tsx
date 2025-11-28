function Home(){
    return (
        <main className="w-full lg:w-200">
                <span className="emoji-01">This is how your HTML elements will look</span>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>

            <div>
                <ol>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                </ol>
                <ul>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                </ul>
            </div>

            <form>
                <input type="text" placeholder="somemail@gmail.com"/>
                <textarea name="textarea" id="about" placeholder="Type something..."></textarea>
            </form>
        </main>
    )
}

export default Home