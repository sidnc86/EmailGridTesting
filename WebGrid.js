function gridNavigation()
{
	$(document).ready(function()
	{
		var tr,td,cell;
			td=$(".gc").length;
			tr=$(".item").length;
			cell=td/(tr-1);//one tr have that much of td
		$(".gc").keydown(function(e)
		{
			
			//alert(cell);
			switch(e.keyCode)
			{
				//case 37: $(this).parent().prev().children("a.link").focus();break;
				//case 39: $(this).parent().next().children("a.link").focus();break;
				//case 40:$(this).parent().parent().next().children("td").children("a.link[name="+$(this).attr("name")+"]").focus();break;
				//case 38:$(this).parent().parent().prev().children("td").children("a.link[name="+$(this).attr("name")+"]").focus();break;
				case 37 : var first_cell = $(this).index();
						if(first_cell==0)
						{
							$(this).parent().prev().children("span").focus();
						}
						else
							$(this).prev("span").focus();break;//left arrow
								
				case 39 : var last_cell = $(this).index();
							if(last_cell == 1)
							{
								$(this).parent().next().children("span").eq(0).focus();
							}
							$(this).next("span").focus();break;//right arrow
							  
				case 40 : var last_cell = $(this).index();
						if(last_cell == 1)
						{
							$(this).parent().next().children("span").eq(0).focus();
						}
						$(this).next("span").focus();break;
							/*var child_cell = $(this).index();	
							  $(this).parent().next().children("span").eq(child_cell).focus();break;//down arrow
							  */
				case 38 : var first_cell = $(this).index();
						if(first_cell==0)
						{
							$(this).parent().prev().children("span").focus();
						}
						else
							$(this).prev("span").focus();break;
								/*var parent_cell = $(this).index();
							  $(this).parent().prev().children("span").eq(parent_cell).focus();break;//up arrow		*/  
			}	
			if(e.keyCode == 113)
			{
				$(this).children().focus();
			}
		});
	
		$(".gc").focusin(function()
		{
			$(this).css("outline","dotted steelblue 3px");
		});
		$(".gc").focusout(function()
		{
			$(this).css("outline","none");
		});			
	});
}

function removeReceipients()
{
	$(".rmv").on("click", function()
	{
		$(this).parent().parent().remove();
		appendItem();
		makeFirstFocusable();
	});
}
function removeReceipientsOnKey()
{
	$(".rmv").keydown(function(e)
	{
		if(e.keyCode == 13)
		{
			$(this).parent().parent().remove();
			appendItem();
			makeFirstFocusable();
		}
	});
}

$(document).ready(function()
{
	appendItem();
	gridNavigation();
	//selects the item from nux list
	$(".user_name").click(function()
	{
		var linkText = $(this).text();
		$(".txt").val(linkText);
	});
	//closing nux list

	$(".btn_close").click(function()
	{
		$(".hidden").css("display","none");
	});
});


