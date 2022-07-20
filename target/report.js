$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/MobilePurchase.feature");
formatter.feature({
  "name": "Mobile Purchase",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.scenarioOutline({
  "name": "All Mobiles",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.step({
  "name": "user login into flipkart",
  "keyword": "And "
});
formatter.step({
  "name": "user search mobile \"\u003cphones\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phones"
      ]
    },
    {
      "cells": [
        "oneplus"
      ]
    },
    {
      "cells": [
        "realme"
      ]
    },
    {
      "cells": [
        "redmi"
      ]
    }
  ]
});
formatter.scenario({
  "name": "All Mobiles",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mobile"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_login_into_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search mobile \"oneplus\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_search_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_choose_the_mobile_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "All Mobiles",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mobile"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_login_into_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search mobile \"realme\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_search_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_choose_the_mobile_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "All Mobiles",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mobile"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_login_into_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search mobile \"redmi\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_search_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the mobile and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_choose_the_mobile_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/TvPurchase.feature");
formatter.feature({
  "name": "Tv Purchase",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tv"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_login_into_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tv",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tv"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user search tv",
  "keyword": "When "
});
formatter.match({
  "location": "TVPurchaseSteps.user_search_tv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the tv and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_choose_the_tv_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_login_into_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "one dimensional list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tv"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user search tv  by using one dimensional list",
  "rows": [
    {
      "cells": [
        "samsungtv",
        "haiertv",
        "lgtv"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TVPurchaseSteps.user_search_tv_by_using_one_dimensional_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the tv and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_choose_the_tv_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "All Tvs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@java"
    }
  ]
});
formatter.step({
  "name": "user search tv \"\u003cTelivisions\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user choose the tv and doing payments",
  "keyword": "And "
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Telivisions"
      ]
    },
    {
      "cells": [
        "Samsungtv"
      ]
    },
    {
      "cells": [
        "haiertv"
      ]
    },
    {
      "cells": [
        "lgtv"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_login_into_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "All Tvs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tv"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@java"
    }
  ]
});
formatter.step({
  "name": "user search tv \"Samsungtv\"",
  "keyword": "When "
});
formatter.match({
  "location": "TVPurchaseSteps.user_search_tv(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the tv and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_choose_the_tv_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_login_into_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "All Tvs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tv"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@java"
    }
  ]
});
formatter.step({
  "name": "user search tv \"haiertv\"",
  "keyword": "When "
});
formatter.match({
  "location": "TVPurchaseSteps.user_search_tv(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the tv and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_choose_the_tv_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkart",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_login_into_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "All Tvs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tv"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@java"
    }
  ]
});
formatter.step({
  "name": "user search tv \"lgtv\"",
  "keyword": "When "
});
formatter.match({
  "location": "TVPurchaseSteps.user_search_tv(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the tv and doing payments",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_choose_the_tv_and_doing_payments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receive order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_receive_order_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
});