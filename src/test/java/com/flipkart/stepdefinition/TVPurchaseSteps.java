package com.flipkart.stepdefinition;

import java.util.List;
import java.util.Map;


import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;


import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;


public class TVPurchaseSteps {

	@When("user search tv")
	public void user_search_tv() {
		   WebElement user = MobilePurchaseSteps.driver.findElement(By.xpath("//input[@type ='text']"));
		   user.sendKeys("onidatv",Keys.ENTER);
		  
	}
	@And("user choose the tv and doing payments")
	public void user_choose_the_tv_and_doing_payments() throws Throwable {
		Thread.sleep(3000);
		 WebElement element = MobilePurchaseSteps.driver.findElement(By.xpath("(//div[@class='_4rR01T'])[1]"));
	element.click();
		MobilePurchaseSteps.driver.quit();
	}
	@When("user search tv  by using one dimensional list")
	public void user_search_tv_by_using_one_dimensional_list(DataTable dataTable) {
		  List<String> asList = dataTable.asList();
		   WebElement search = MobilePurchaseSteps.driver.findElement(By.xpath("//input[@type ='text']"));
		search.sendKeys(asList.get(1),Keys.ENTER);
			String text1 = search.getText();
	}

	@When("user search tv  by using one dimensional map")
	public void user_search_tv_by_using_one_dimensional_map(DataTable dataTable) {
		Map<String, String> asMap = dataTable.asMap(String.class, String.class);
		   WebElement search = MobilePurchaseSteps.driver.findElement(By.xpath("//input[@type ='text']"));
		search.sendKeys(asMap.get("tv3"),Keys.ENTER);
	
	}
	@When("user search tv {string}")
	public void user_search_tv(String names) {
		//MobilePurchaseSteps.driver.findElement(By.name("q")).sendKeys(names,Keys.ENTER);
		 WebElement user = MobilePurchaseSteps.driver.findElement(By.xpath("//input[@type ='text']"));
		   user.sendKeys(names,Keys.ENTER);
	}
}


