var images = ["https://images4.alphacoders.com/119/thumbbig-1196720.jpg","https://pbs.twimg.com/profile_images/1510599586708353024/KeZ5Bz3z_400x400.jpg", "https://i.pinimg.com/736x/2c/d6/ef/2cd6ef1e5042c4bc6b9000602084ffa0.jpg" , "https://images2.alphacoders.com/116/1162478.jpg"];
var names = ["Family Book","Kamisato Ayato", "Kamisato Ayaka", "Thoma"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = [images[i]];
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
