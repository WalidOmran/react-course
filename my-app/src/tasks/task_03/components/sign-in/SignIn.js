function SignIn(){
    const signIn = {
        title : 'Get 15% off when you sign in',
        btn: {
            text:'Sign in now'
        },
        link:{
            text: 'Create a new account'
        }
    }
    return(
        <section class="sign-in">
            <div class="container">
                <div class="sign-in_area">
                    <h2 class="sign-in_title">{signIn.title} </h2>
                    <button class="sign-in_btn btn">{signIn.btn.text}</button>
                    <a class="sign-in_link" href="#">{signIn.link.text}</a>
                </div>
            </div>
        </section>
    );
}
export default SignIn