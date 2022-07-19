package com.flipkart.stepdefinition;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;

public class MobilePurchaseSteps {
	static WebDriver driver;
	@Given("user launches flipkart application")
	public void user_launches_flipkart_application() {
		  WebDriverManager.edgedriver().setup();
		  driver = new EdgeDriver();
		  driver.get("https://www.flipkart.com/");
		  driver.manage().window().maximize();
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		  
	}

	@And("user login into flipkart")
	public void user_login_into_flipkart() {
		WebElement X=driver.findElement(By.xpath("//button[text()='✕']"));
		X.click();
		
	}

	@When("user search mobile")
	public void user_search_mobile() {
		 WebElement user = driver.findElement(By.xpath("//input[@type ='text']"));
		   user.sendKeys("realme",Keys.ENTER);
	}

	@And("user choose the mobile and doing payments")
	public void user_choose_the_mobile_and_doing_payments() {
		 WebElement element1 = driver.findElement(By.xpath("(//div[@class='_4rR01T'])[1]"));
		   element1.click();
		   
		   
		   WebElement element2 = driver.findElement(By.xpath("(//div[@class='_4rR01T'])[2]"));
		   element2.click();
		   
		   
		   WebElement element3 = driver.findElement(By.xpath("(//div[@class='_4rR01T'])[3]"));
		   element3.click();
		 
	    	}
	@Then("user receive order confirmation message")
	public void user_receive_order_confirmation_message() throws Throwable {
		  driver.quit();
	}
	
	
	@When("user search mobile by using one dimensional list")
	public void user_search_mobile_by_using_one_dimensional_list(DataTable dataTable) {
	   
	  List<String> asList = dataTable.asList();
	  
	  driver.findElement(By.name("q")).sendKeys(asList.get(0),Keys.ENTER);
	  WebElement user = driver.findElement(By.xpath("(//div[contains(text(),'"+asList.get(0)+"')])[2]"));
	  // user.sendKeys(asList.get(0),Keys.ENTER);
	   String text1 = user.getText();
	   user.click();
	   
	}
	

@When("user search mobile by using one dimensional map")
public void user_search_mobile_by_using_one_dimensional_map(DataTable dataTable) {
    
	Map<String, String> asMap = dataTable.asMap(String.class, String.class);
	  
	  driver.findElement(By.name("q")).sendKeys(asMap.get("phone3"),Keys.ENTER);
	  WebElement user = driver.findElement(By.xpath("(//div[contains(text(),'"+asMap.get("phone3")+"')])[2]"));
	   String text2 = user.getText();
	   user.click();
}

@When("user search mobile {string}")
public void user_search_mobile(String names) {
	driver.findElement(By.name("q")).sendKeys(names,Keys.ENTER);
	//  WebElement user = driver.findElement(By.xpath("(//div[contains(text(),'"+names+"')])[2]"));
	   //String text3 = user.getText();
	 //  user.click();
}


}
