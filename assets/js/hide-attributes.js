const hideAttribute = element => {
    let options = element.querySelectorAll( 'option' );

    console.log( options.length );

    if ( options.length == 1 || options.length == 2 ) {
        if ( includesNonApplicable( options ) ) {
            console.log( element );
            element.style.display = 'none';
        } else {

            element.style.display = 'inline-block';
        }
    }
}

const includesNonApplicable = options => {
    let count = 0;

    options.forEach( option => {
        if ( option.value === 'Do Not Apply' ) count++;
    });

    return count;
}

const attributeValueIsNonApplicable = attribute => {
    if ( attribute.value === 'Do Not Apply' ) {
        return true;
    }

    return false;
}

jQuery( document  ).on( 'check_variations', function(e){
    /**
     * For each variation select, hide the select if variation has only
     * the non-applicable attribute option.
     */
    let variations = document.querySelector( 'table.variations' );
    let selects = variations.querySelectorAll( 'td.value select' );

    
    selects.forEach( hideAttribute );
});

jQuery( document ).on( 'change.wc-variation-form', function(e) {
    jQuery( 'table.variations td.value select' ).css( {'display':'inline-block'} );
});