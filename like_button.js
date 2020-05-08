const e = React.createElement;

function LikeButton(){
	return e(
  	'button',
 	 { onClick: () => alert('Hello this is an alert.') },
 	 'React Button');
}


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);