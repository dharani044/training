<<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Home.aspx.cs" Inherits="Home" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head id="Head1" runat="server"><title>ARaynorDesign Template
</title><meta name="description" content="free website template" /><meta name="keywords" content="enter your keywords here" /><meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=9" /><link rel="stylesheet" type="text/css" href="css/style.css" /><script type="text/javascript" src="js/jquery.min.js">
</script><script type="text/javascript" src="js/image_slide.js">
</script></head><body><form id="form1" runat="server">
    <div>
    <div id="main">
    <div id="header">
	  <div id="banner">
	    <div id="welcome">
	      <h1>Welcome To Leather &amp; Coffee</h1>
	    </div><!--close welcome-->
	      <!--close menubar-->	  
	    <div id="menubar">
                <asp:Menu ID="menu" runat="server" CssClass="menu" EnableViewState="false" 
                    IncludeStyleBlock="true" Orientation="Horizontal" BorderColor="White" 
                    BorderStyle="None" BorderWidth="5px">
                    <Items>
                        <asp:MenuItem NavigateUrl="~/try.aspx" Text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
                        <asp:MenuItem NavigateUrl="~/ourwork.html" Text="Our Work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
                        <asp:MenuItem NavigateUrl="~/testimonials.html" Text="Testimonials&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
                        <asp:MenuItem NavigateUrl="~/projects.html" Text="Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
                        <asp:MenuItem NavigateUrl="~/contact.html" Text="Contact Us&nbsp;&nbsp;&nbsp;"/>
                    </Items>
                </asp:Menu>
        </div>	  
	  </div><!--close banner-->	
    </div><!--close header-->	
    
	<div id="site_content">	
      <div class="slideshow">  
      <asp:Menu ID="slid" Orientation="Vertical" runat="server" CssClass="slidshow img" 
              EnableViewState="false" IncludeStyleBlock="true" BorderStyle="None">
		<Items>
           <asp:MenuItem ImageUrl="images/home_1.jpg"> </asp:MenuItem>
        </Items>
        </asp:Menu>
      </div><!--close slideshow-->		
	 
	  <div id="content">
        <div class="content_item">
		  <h1>Welcome To Your Website</h1> 
          <p>This standards compliant, simple, fixed width website template is released as an 'open source' design (under the Creative Commons Attribution 3.0 Licence), which means that you are free to download and use it for anything you want (including modifying and amending it). If you would like to remove the &lsquo;website template by ARaynorDesign&rsquo; link from the footer of a template / website then that is OK, all I ask is for a donation of &pound;20.00 GBP. Please feel free to contact me with any questions you may have about my free website templates or bespoke work.</p>   				  
		</div><!--close content_item-->
      </div><!--close content-->   
	  
	  <div class="container">
	    <div class="ourwork">
	      <h3>Our Work</h3>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim.</p>
		  <div class="more">
              <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="ourwork.html">Read more</asp:HyperLink>
		  </div><!--close more-->      
	    </div><!--close ourwork-->
	    <div class="testimonials">
	      <h3>Testimonials</h3>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim.</p>	  
		  <div class="more">
          <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="testimonials.html">Read more</asp:HyperLink>
		  </div><!--close more-->        
	    </div><!--close testimonials-->	  
	    <div class="projects">
	      <h3>Projects</h3>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tempor enim.</p>	  
		  <div class="more">
		    <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="projects.html">Read more</asp:HyperLink>
		  </div><!--close more-->        
	    </div><!--close projects-->
	  </div><!--close container-->
	
	</div><!--close site_content--> 
    
	<div id="content_cream">
	  <div class="content_cream_container_box">
		<h4>Latest Blog Post</h4>
	    <p> Phasellus laoreet feugiat risus. Ut tincidunt, ante vel fermentum iaculis.</p>
		<div class="readmore">
            <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="#">Read more</asp:HyperLink>
		</div><!--close readmore-->
	  </div><!--close content_cream_container_box-->
      <div class="content_cream_container_box">
       <h4>Latest News</h4>
	    <p> Phasellus laoreet feugiat risus. Ut tincidunt, ante vel fermentum iaculis.</p>
	    <div class="readmore">
            <asp:HyperLink ID="HyperLink5" runat="server" NavigateUrl="#">Read more</asp:HyperLink>
		</div><!--close readmore-->
	  </div><!--close content_cream_container_box-->
      <div class="content_cream_container_boxl">
		<h4>Contact Us</h4>
	    <p> Phasellus laoreet feugiat risus. Ut tincidunt, ante vel fermentum iaculis.</p>
	    <div class="readmore">
		  <asp:HyperLink ID="HyperLink6" runat="server" NavigateUrl="#">Read more</asp:HyperLink>
		</div><!--close readmore-->	  
	  </div><!--close content_cream_container_box1-->      
	  <br style="clear:both"/>
    </div><!--close content_cream-->   
  </div><!--close main-->
        <div ID="footer_container" runat="server">     
        <div ID="footer" runat="server">  
  <%--<div id="footer_container">
    <div id="footer">--%>
        <asp:HyperLink ID="validxhtml" runat="server" NavigateUrl="http://validator.w3.org/check?uri=referer">Valid XHTML</asp:HyperLink> | 
        <asp:HyperLink ID="Images" runat="server" NavigateUrl="http://fotogrph.com/">Images</asp:HyperLink> | Heart Internet 
        <asp:HyperLink ID="web_hosting" runat="server" NavigateUrl="http://www.heartinternet.co.uk/web-hosting/">web hosting</asp:HyperLink>  | website template by 
        <asp:HyperLink ID="ARaynorDesig" runat="server" NavigateUrl="http://www.araynordesign.co.uk">ARaynorDesig</asp:HyperLink>
   </div><!--close footer-->  
  </div><!--close footer_container-->  
    </div>
    </form>
</body>
</html>

