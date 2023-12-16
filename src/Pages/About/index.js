const About = () => (
    <div>

        <html lang="en">

            <head>
                
                    <title>Wonder Mingle - Your Gateway to Like-minded Travel Companions</title>
            </head>

            <body>
                <header>
                    <h1>Welcome to Wonder Mingle</h1>
                    <p>Your Gateway to Like-minded Travel Companions!</p>
                </header>

                <main>
                    <p>Whether you're an avid explorer or someone seeking new adventures, Wonder Mingle connects you with fellow travelers who share your interests. The app seamlessly blends social networking with travel planning, providing a comprehensive platform to make meaningful connections.</p>
                </main>

                <footer>
                    <p>&copy; <span id="year"></span> Wonder Mingle</p>
                </footer>

                <script>
     
                    document.getElementById("year").innerText = new Date().getFullYear();
                </script>
            </body>

        </html>

    </div>
)

export default About;