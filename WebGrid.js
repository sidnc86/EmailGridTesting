function gridNavigation()
{
	$(document).ready(function()
	{
		$(".gc").keydown(function(e)
		{
			var tr,td,cell;
			td=$("td").length;
			tr=$("tr").length;
			cell=td/(tr-1);//one tr have that much of td
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

$(document).ready(function()
{	
	//gridNavigation();
	var id=0;
	$('#btn_add').click(function()	
	{
		var txt_recp= $(".txt").val();
		if(txt_recp=="")
		{
					
		}			
		else
		{
			++id;
			var idBtn=txt_recp+""+id;
			$(".itemlist").append("<div role='row' class='item'>"+
									"<span role='gridcell' class='gc' tabindex='-1'>"+
										"<a id='"+txt_recp+"' class='item_name' aria-label='"+txt_recp+"' tabindex='-1' href='#'>"+txt_recp+"</a>"+
									"</span>"+
									"<span role='gridcell' class='gc' tabindex='-1'>"+
										"<span class='rmv' tabindex='-1' role='button' aria-labelledby='"+idBtn+" "+txt_recp+"'>" + "<span id='"+idBtn+"' aria-label='Remove '>x</span>"+
"</span>"+
									"</span>"+ 
								"</div>");
								$("#form-action-text").text(txt_recp);
			gridNavigation();
			//removeReceipents();
			$(".txt").val("").focus();
		}				
	});
});



$(document).ready(function()
{
	
	var id=0;
	$(".txt").keydown(function(e)
	{
		gridNavigation();
		if($(".txt").val()=="")
		{
			
		}
		else if(e.keyCode==13)
		{
			var txt_recp= $(".txt").val();
			++id;
			var idBtn=txt_recp+""+id;
			$(".itemlist").append("<div role='row' class='item'>"+
									"<span role='gridcell' class='gc' tabindex='-1'>"+
										"<a id='"+txt_recp+"' class='item_name' aria-label='"+txt_recp+"' tabindex='-1' href='#'>"+txt_recp+"</a>"+
									"</span>"+
									"<span role='gridcell' class='gc' tabindex='-1'>"+
										"<span id='"+idBtn+"' class='rmv' tabindex='-1' role='button' aria-label='Remove' aria-labelledby='"+idBtn+"''"+txt_recp+"'>x</span>"+
									"</span>"+ 
								"</div>");
								$("#form-action-text").text(txt_recp);
			gridNavigation();
			//removeReceipents();
			$(".txt").val("").focus();
		}
		else
			$(".hidden").css("display","block");
	});
});

$(".rmv").click(function()
{
	alert("Hello");
});

function txtDownKeyPressed()
{
	$(".txt").keydown(function(e)
	{
		if(e.keyCode==40)
		{
			$(".nux_recp_list").find("#one").children().focus();
		}
		else{}
	});
}

$(document).ready(function()
{
	$(".user_name").click(function()
	{
		var linkText = $(this).text();
		$(".txt").val(linkText);
	});
});

$(document).ready(function()
{
	$(".btn_close").click(function()
	{
		$(".hidden").css("display","none");
	});
});

