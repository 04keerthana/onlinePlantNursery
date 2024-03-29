import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Planter } from '../planter';
import { PlanterOperationService } from '../planter-operation.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  __planterService:PlanterOperationService; // creating object of Service layer
  router:Router;

  
  allPlanter : Array<Planter> = [];
  watchList : Array<Planter> = [];
  watchlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(planterService:PlanterOperationService,router:Router)
  {
    this.__planterService = planterService;
    this.allPlanter = this.__planterService.getPlanterArr();
    this.router = router;
    console.log(this.allPlanter.length);
  }
  viewPlanterDetails(pid:string)
  {
    
    this.router.navigate(['planterDetail',pid]);
  }



  goForBuy(planter:string)
  {
    let planterId = parseInt(planter);
    console.log(" code to buy "+planterId+" planter");
    
  }

  addWatchlist(planter:string)
  {
    let addPlanterId = parseInt(planter);
    
    this.allPlanter.forEach(p=>{
      if(p.planterId == addPlanterId)
      {
        this.watchList.push(p);
        
      }
    });
    this.watchlistCount = this.watchList.length;
    console.log(this.watchList);
    
  }

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allPlanter = this.__planterService.getPlantersByCategory(filterValue);
  }
  getFilterData2(filterValue:string)
  {
  
    console.log(" Filter Value "+filterValue);

    this.allPlanter = this.__planterService.getPlantersByStarRating(parseInt(filterValue));
  }

  allPlanterDetails: Planter[] = [];
  filteredPlanter: Planter[]=[];

  // constructor(private planterService: PlanterOperationService) {
  //   this.allPlanterDetails = this.planterService.getPlanterArr();
  // }

  // getFilterData1(filterValue: string) {
  //   console.log("Filter Value: " + filterValue);
  //   const filterDate = new Date(filterValue).getTime(); // convert filterValue to timestamp
  //   this.filteredPlanter = this.allPlanterDetails.filter(planter => planter.plantedFrom === filterCategory);
  // }



}
