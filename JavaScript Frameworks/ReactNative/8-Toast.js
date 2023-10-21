
// show()
ToastAndroid.show("Vous avez valider !!!", 1000);
ToastAndroid.show("Vous avez valider !!!", ToastAndroid.SHORT ;);

// showWithGravity()
ToastAndroid.showWithGravity("Vous avez valider !!!", 3000, ToastAndroid.TOP);
ToastAndroid.showWithGravity("Vous avez valider !!!", ToastAndroid.LONG, ToastAndroid.BOTTOM);
ToastAndroid.showWithGravity("Vous avez valider !!!", 3000, 64);

// showWithGravityAndOffset()
ToastAndroid.showWithGravityAndOffset("Vous avez valider !!!", 1000, ToastAndroid.TOP, 0, 200);

// La Durée
milisecondes / SHORT / LONG
1000		//
ToastAndroid.SHORT ;
ToastAndroid.LONG ;

// La Position
Number / TOP / BOTTOM / CENTER

ToastAndroid.TOP ;
ToastAndroid.BOTTOM ;
ToastAndroid.CENTRE ;

0,1		center center
2,3,6	center left
4,5		center right
7		center stretch

32,33		top center
34,35,38	top left
36,37		top right
39			top stretch

64,65		bottom center
66,67,70	bottom left
68,69		bottom right
71			bottom stretch
