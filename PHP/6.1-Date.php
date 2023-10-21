			/************
			*	DATE	*
			************/
<?php

// create new date
date('Y-m-d H:i:s')

(new \DateTime())->format('Y-m-d H:i:s');


$membership_product_date = get_user_meta($user_id,'membership_product_date',true);
$date = strtotime($membership_product_date);
$expiration_date_not_formated = strtotime($expiration_limit, $date);
$expiration_date = date('Y-m-d H:i:s', $expiration_date_not_formated);
$today = date("Y-m-d H:i:s");

if($today > $expiration_date){
		return $has_expired = true;
	} else {
		return $has_expired = false;
	}
	
// Ajouter ou soustraire des Jours, heures, minutes, etc... a un objet Date:
"https://doc.bccnsoft.com/docs/php-docs-7.4-en/datetime.sub.html"

$Min_Date_Object = $Day_Object->add(new DateInterval("PT5H"));
$min_date = $Min_Date_Object->format('d-m-Y H:i:s');
$Max_Date_Object = $Day_Object->add(new DateInterval("P1D"));

$Month_Before_Object = $Today_Object->sub(new DateInterval('P1M'));
$postedStartDate = $Month_Before_Object->format('Y-m-d');