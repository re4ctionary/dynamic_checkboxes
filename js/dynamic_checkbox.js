$(function(){
    
    $basic_column_names = [ "Patron Id", "Last Name", "First Name", "E-Mail", "Phone", "Primary Address 1", "Primary Address 2", "Primary Address City", "Primary Address State / Region", "Primary Address Postal Code", "Primary Address Country", "Household Name" ]
    
    $advanced_column_names = [ "Household Long Salutation", "Nickname", "Custom Login Id", "Gender", "Birthday", "Age", "Email Signup", "Title", "Suffix", "Salutation", "Long Salutation", "School", "Shipping Address 1", "Shipping Address 2", "Shipping Address City", "Shipping Address State / Region", "Shipping Address Postal Code", "Shipping Address Country", "Employer", "Job Title", "Organization", "Notes Children", "Comm. Preference", "Primary Phone", "Secondary Phone", "Created", "Record type", "Relationship Status", "Partner Website", "First donation", "First Donation", "Last Donation", "Last Donation", "Last Donation Recognition Name", "First Event Attended", "Last Event Attended", "First Purchase", "Last Purchase", "Next Event Planned", "Next Event Planned Date", "Total Purchase (including donations)", "Total Donation", "All Patron Categories", "Donation 2015", "Donation 2014", "Donation 2013", "Donation 2012", "Donation 2011" ]
    
    $all_column_names = [ $basic_column_names, $advanced_column_names];

    $(function listTableColumns(FilterSet){
        
        $('.customFilter').each(function( FilterGroup ){
        	$.each($all_column_names[FilterGroup], function( FilterId , FilterName ) {
                /* This section can be better written */
                if(FilterGroup == 0) {
                    $( ".BasicOptions" ).append( "<span class='customFilterCheckbox'><input type='checkbox' name='" + FilterName + "' value='" + FilterName + "' id='f" + FilterId + "' checked='checked' />	<label for='f" + FilterId + "'>" + FilterName + "</label></span>" );
                }
                if(FilterGroup == 1) {
                    FilterId += 11;
                    $( ".AdvancedOptions" ).append( "<span class='customFilterCheckbox'><input type='checkbox' name='" + FilterName + "' value='" + FilterName + "' id='f" + FilterId + "' />	<label for='f" + FilterId + "'>" + FilterName + "</label></span>" );
                }
                /* used to test ids */
                console.log( FilterId )    
            });
    	});            
    });
}); 
