    //Collection Filter Top Button Clicking Start
      //Collection Filter All button Top Set Clickcing in Filter
      let topForm = document.getElementById('formFilterTopButton');
      let firtLayerForm = document.getElementById('FacetFiltersForm');

      if(document.querySelector('#layerOne.dekbedovertrekken')){
        document.querySelector('#layerOne').addEventListener('click', e =>{
           //DEKBEDOVERTREK
           if(e.target.value == '1-Persoons'){
             document.querySelector('#Facet-1-template--20894960025635__dekbedovertrekken_collection_zmeg4H ul li:nth-child(1) label input').click();
           }
           else if(e.target.value == '2-Persoons'){
             document.querySelector('#Facet-1-template--20894960025635__dekbedovertrekken_collection_zmeg4H ul li:nth-child(2) label input').click();
           }
           else if(e.target.value == 'Lits-Jumeaux'){
             document.querySelector('#Facet-1-template--20894960025635__dekbedovertrekken_collection_zmeg4H ul li:nth-child(3) label input').click();
           }
        });  
      }
      
      if(document.querySelector('#layerOne.hoeslakens')){
        document.querySelector('#layerOne').addEventListener('click', e =>{
           //HOESLAKENS
           if(e.target.value == 'Kinderen'){
             document.querySelector('#Facet-5-template--20892696576035__hoeslaken_collection_VCcw7i ul li:nth-child(1) label input').click();
           }
           else if(e.target.value == '90 cm'){
             document.querySelector('#Facet-7-template--20892696576035__hoeslaken_collection_VCcw7i ul li:nth-child(3) label input').click();
           }
           else if(e.target.value == '120 cm'){
             document.querySelector('#Facet-7-template--20892696576035__hoeslaken_collection_VCcw7i ul li:nth-child(4) label input').click();
           }
           else if(e.target.value == '140 cm'){
             document.querySelector('#Facet-7-template--20892696576035__hoeslaken_collection_VCcw7i ul li:nth-child(5) label input').click();
           }
           else if(e.target.value == '160 cm'){
             document.querySelector('#Facet-7-template--20892696576035__hoeslaken_collection_VCcw7i ul li:nth-child(6) label input').click();
           }
           else if(e.target.value == '180 cm'){
             document.querySelector('#Facet-7-template--20892696576035__hoeslaken_collection_VCcw7i ul li:nth-child(7) label input').click();
           }
           else if(e.target.value == '200 cm'){
             document.querySelector('#Facet-7-template--20892696576035__hoeslaken_collection_VCcw7i ul li:nth-child(8) label input').click();
           }
        });  
      }
      if(document.querySelector('#layerOne.moltons')){
        document.querySelector('#layerOne').addEventListener('click', e =>{
           //MOLTONS
           if(e.target.value == 'Kinderen'){
             document.querySelector('#FacetMobile-8-template--20926199037987__moltons_collection_RVxzmj ul li:nth-child(1) label input').click();
           }
           else if(e.target.value == '90 cm'){
             document.querySelector('#FacetMobile-8-template--20926199037987__moltons_collection_RVxzmj ul li:nth-child(3) label input').click();
           }
           else if(e.target.value == '120 cm'){
             document.querySelector('#FacetMobile-8-template--20926199037987__moltons_collection_RVxzmj ul li:nth-child(4) label input').click();
           }
           else if(e.target.value == '140 cm'){
             document.querySelector('#FacetMobile-8-template--20926199037987__moltons_collection_RVxzmj ul li:nth-child(5) label input').click();
           }
           else if(e.target.value == '160 cm'){
             document.querySelector('#FacetMobile-8-template--20926199037987__moltons_collection_RVxzmj ul li:nth-child(6) label input').click();
           }
           else if(e.target.value == '180 cm'){
             document.querySelector('#FacetMobile-8-template--20926199037987__moltons_collection_RVxzmj ul li:nth-child(7) label input').click();
           }
           else if(e.target.value == '200 cm'){
             document.querySelector('#FacetMobile-8-template--20926199037987__moltons_collection_RVxzmj ul li:nth-child(8) label input').click();
           }
        });  
      }
      if(document.querySelector('#layerOne.lakens')){
        document.querySelector('#layerOne').addEventListener('click', e =>{
           //LAKENS
           if(e.target.value == '1-Persoons'){
             document.querySelector('#Facet-1-template--20894996135971__lakens_collection_j3HMCD ul li:nth-child(1) label input').click();
           }
           else if(e.target.value == '2-Persoons'){
             document.querySelector('#Facet-1-template--20894996135971__lakens_collection_j3HMCD ul li:nth-child(2) label input').click();
           }
           else if(e.target.value == 'Lits-Jumeaux'){
             document.querySelector('#Facet-1-template--20894996135971__lakens_collection_j3HMCD ul li:nth-child(3) label input').click();
           }
        });  
      }
      if(document.querySelector('#layerOne.keukendoeken')){
        document.querySelector('#layerOne').addEventListener('click', e =>{
           //KEUKENDOEKEN
           if(e.target.value == 'Keukendoeken'){
             document.querySelector('#Facet-1-template--20895875203107__keukendoeken_collection_Mcdxqy ul li:nth-child(1) label input').click();
           }
           else if(e.target.value == 'Theedoeken'){
             document.querySelector('#Facet-1-template--20895875203107__keukendoeken_collection_Mcdxqy ul li:nth-child(2) label input').click();
           }
        });  
      }
       if(document.querySelector('#layerOne.tafellinnen')){
        document.querySelector('#layerOne').addEventListener('click', e =>{
           //KEUKENDOEKEN
           if(e.target.value == 'Servetten'){
             document.querySelector('#Facet-1-template--20895922552867__tafellinnen_collection_KWB8eD ul li:nth-child(1) label input').click();
           }
           else if(e.target.value == 'Tafellaken'){
             document.querySelector('#Facet-1-template--20895922552867__tafellinnen_collection_KWB8eD ul li:nth-child(2) label input').click();
           }
           else if(e.target.value == 'Tafelloper'){
             document.querySelector('#Facet-1-template--20895922552867__tafellinnen_collection_KWB8eD ul li:nth-child(3) label input').click();
           }
        });  
      }
      //Collection Filter Top Button Clicking End
      
      //Collection Page Refresh/Load working Start ++ Count Total Size
      document.getElementById('FacetFiltersForm').addEventListener('input', collectionPageLoad);
      document.getElementById('FacetFiltersForm').addEventListener('keyup', collectionPageLoad);
      document.getElementById('FacetFiltersForm').addEventListener('click', collectionPageLoad);
      window.addEventListener('load', collectionPageLoad);
      window.addEventListener('popstate', collectionPageLoad);
      
      function collectionPageLoad(){
        setInterval(function() {
          // Count Total Filter Number
          var filterValueSize = document.querySelectorAll('#filterActiveValueCountSec .filterValuSize');
          var totalSize = 0;
          
          filterValueSize.forEach(element =>{
            totalSize =  totalSize + parseInt(element.value);
          });
          
          if(totalSize == 0){
            document.getElementById('layerOne').style.display = 'block';
          } 
      
          if(totalSize > 0 ){
            document.getElementById('layerOne').style.display = 'none';
          }else {
            document.getElementById('layerOne').style.display = 'block';
          }
        }, 0 );
      }
      //Collection Page Refresh/Load working End
