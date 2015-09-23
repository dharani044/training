<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ourwork.aspx.cs" Inherits="ourwork" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
      <div id="main">
    <div id="header">
	  <div id="banner">
	    <div id="welcome">
	      <h1>Welcome To Leather &amp; Coffee</h1>
	    </div><!--close welcome-->
	    <div id="menubar">
         <asp:Menu ID="menubar1" runat="server" CssClass="current" EnableViewState="false" 
                    IncludeStyleBlock="true" Orientation="Horizontal" BorderColor="White" 
                    BorderStyle="None" BorderWidth="5px">
                    <Items>
                        <asp:MenuItem NavigateUrl="~/home.aspx" Text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
                        <asp:MenuItem NavigateUrl="~/ourwork.html" Text="Our Work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
                        <asp:MenuItem NavigateUrl="~/testimonials.html" Text="Testimonials&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
                        <asp:MenuItem NavigateUrl="~/projects.html" Text="Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
                        <asp:MenuItem NavigateUrl="~/contact.html" Text="Contact Us&nbsp;&nbsp;&nbsp;"/>
                    </Items>
                </asp:Menu>
        </div><!--close menubar-->	  
	  </div><!--close banner-->	
    </div><!--close header-->		
    
	<div id="site_content">	
	
      <div class="slideshow">  
		
      </div><!--close slideshow-->			
        
	  <div id="content">
        <div class="content_item">
          <h2>Our Work</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper, massa eu iaculis imperdiet, turpis nunc aliquam augue, eget condimentum lectus velit vitae urna. Curabitur eu feugiat erat. Nam et arcu sit amet magna facilisis accumsan vel nec mauris. Vivamus interdum adipiscing molestie. Vestibulum sollicitudin massa eget turpis cursus eget ullamcorper odio pharetra. Sed dictum lacus sed erat molestie id aliquet enim vestibulum.</p>
		    <div class="content_container">
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim. Aliquam facilisis neque non nunc posuere eget volutpat metus tincidunt.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim. Aliquam facilisis neque non nunc posuere eget volutpat metus tincidunt.</p>
		    	<div class="button_small">
		        <a href="#">Read more</a>
		      </div><!--close button_small-->
		    </div><!--close content_container-->
            <div class="content_container">
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim. Aliquam facilisis neque non nunc posuere eget volutpat metus tincidunt.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim. Aliquam facilisis neque non nunc posuere eget volutpat metus tincidunt.</p>          
		    	<div class="button_small">
		        <a href="#">Read more</a>
		        </div><!--close button_small-->		  
		    </div><!--close content_container-->				
		</div><!--close content_item-->
      </div><!--close content-->   
	
	</div><!--close site_content-->
	
	<div id="content_cream">
	  <div class="content_cream_container_box">
		<h4>Latest Blog Post</h4>
	    <p> Phasellus laoreet feugiat risus. Ut tincidunt, ante vel fermentum iaculis.</p>
		<div class="readmore">
		  <a href="#">Read more</a>
		</div><!--close readmore-->
	  </div><!--close content_cream_container_box-->
      <div class="content_cream_container_box">
       <h4>Latest News</h4>
	    <p> Phasellus laoreet feugiat risus. Ut tincidunt, ante vel fermentum iaculis.</p>
	    <div class="readmore">
		  <a href="#">Read more</a>
		</div><!--close readmore-->
	  </div><!--close content_cream_container_box-->
      <div class="content_cream_container_boxl">
		<h4>Contact Us</h4>
	    <p> Phasellus laoreet feugiat risus. Ut tincidunt, ante vel fermentum iaculis.</p>
	    <div class="readmore">
		  <a href="#">Read more</a>
		</div><!--close readmore-->	  
	  </div><!--close content_cream_container_box1-->      
	  <br style="clear:both"/>
    </div><!--close content_cream-->      
 
  </div><!--close main-->
  
  <div id="footer_container">
    <div id="footer">
	  <a href="http://validator.w3.org/check?uri=referer">Valid XHTML</a> | <a href="http://fotogrph.com/">Images</a> | Heart Internet <a href="http://www.heartinternet.co.uk/web-hosting/">web hosting</a> | website template by <a href="http://www.araynordesign.co.uk">ARaynorDesign</a>
    </div><!--close footer-->  
  </div><!--close footer_container--> 
    </div>
    </form>
</body>
</html>
