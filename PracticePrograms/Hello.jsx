class HelloWorld extends React.Component{
    render(){
        const cont=['Africa','Uganda','Pakitan','India'];
        const hello=Array.from(cont,c=>'Hello!{c}');
        const msg=hello.join("");
        return(
            <div title="outer div">
            <h1>{msg}</h1>
            </div>
        );
    }
}
const ele=<HelloWorld/>;
ReactDOM.render(ele,document.getElementById('contents'));
