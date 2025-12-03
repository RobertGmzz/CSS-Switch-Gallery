function Home(){
    return (
        <main className="w-full lg:w-200 flex flex-col gap-5">
            <hr />
            <h2 className="text-center">This is how your HTML elements will look</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="somemail@gmail.com"/>
                <label htmlFor="textarea">Textarea </label>
                <textarea name="textarea" id="textarea" placeholder="Type something..."></textarea>
                <label htmlFor="disabled">Disabled</label>
                <input disabled name="disabled" placeholder="You can't write here, sorry"/>
            </form>

            <div>
                <ul>
                    <li>Unordered List</li>
                    <li>Unordered List</li>
                    <li>Unordered List</li>
                </ul>
                <ol>
                    <li>Ordered List</li>
                    <li>Ordered List</li>
                    <li>Ordered List</li>
                </ol>
            </div>

            <div>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </div>

            <blockquote>This is a blockquote example. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A similique dolore, unde maiores odit, provident velit, doloribus quos quaerat nobis quo veritatis consectetur et perferendis est voluptatibus dolorem tempora fugit.</blockquote>
        </main>
    )
}

export default Home