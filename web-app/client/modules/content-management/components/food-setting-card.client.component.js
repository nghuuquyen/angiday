/**
 * @module components
 * @name KeyWordSettingCardComponent
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 */
(function () {
  'use strict';

  angular
    .module('content-management')
    .component('foodSettingCardComponent', {
      templateUrl: 'client/modules/content-management/components/templates/food-setting-card.client.template.html',
      controller: Controller,
      controllerAs: 'vm',
      bindings: {
        /**
         * @var String 
         * Food id, set to false if want to create new and string value food id 
         * if want to edit exists food.
         */
        id: '=',
        /**
         * Callback when update food successfull.
         */
        onUpdate: '&',
        /**
         * Callback when create food successfull.
         */
        onCreate: '&'
      },
    });

  Controller.$inject = [
    'FoodService', '_', 'toastr'
  ];

  function Controller(FoodService, _, toastr) {
    let vm = this;

    /**
     * @var Object 
     * Food object model.
     */
    vm.food = getEmptyFoodModel();

    /**
     * @var String 
     * Food form title.
     */
    vm.formTitle = '';

    /**
     * @var String 
     * Submit form button title.
     */
    vm.submitBtnTitle = '';

    /**  ======== HOOKS FUNCTIONS ======== **/

    vm.$onInit = initComponent;

    /**  ======== PUBLIC FUNCTIONS ======== **/

    vm.submitFoodForm = submitFoodForm;

    /**  ======== PRIVATE FUNCTIONS ======== **/

    /**
     * @name initComponent
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description 
     * Active and initial component controller.
     */
    function initComponent() {
      prepareUpdateOrCreateAction();
    }

    /**
     * @name prepareUpdateOrCreateAction
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Cheking and prepard data for update or create new food action.
     * 
     * @return void 
     */
    function prepareUpdateOrCreateAction() {
      if (vm.id) {
        vm.formTitle = 'Food Edition Form';
        vm.submitBtnTitle = 'Update';

        // Update exsits food, we need call api to get food data.
        FoodService.get({ id: vm.id }).$promise
          .then(food => {
            vm.food = food;
          })
          .catch(err => {
            if (err.status === 404) {
              vm.message = `Not found food with id ${vm.id}`;
            } else {
              vm.message = `Something error: ${err.data}`;
            }
          });
      } else {
        vm.formTitle = 'Food Creation Form';
        vm.submitBtnTitle = 'Save';
      }
    }

    /**
     * @name submitFoodForm
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Submit food form, it will perform action create or edit depend food data.
     * @return Promise<Object>
     */
    function submitFoodForm() {
      if (vm.id) {
        return updateFood();
      } else {
        return createFood();
      }
    }

    /**
     * @name createFood
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description 
     * Do create new food.
     * 
     * @return Promise<Object>
     */
    function createFood() {
      const data = _.pick(vm.food, ['name', 'description']);
      return FoodService.save(data).$promise
        .then(food => {
          toastr.success(`Creating food ${food.name} compeleted.`);
          // Must reset food form model.
          vm.food = getEmptyFoodModel();

          // Trigger callback.
          vm.onCreate({ food: food });
        });
    }

    function updateFood() {
      const data = _.pick(vm.food, ['id', 'name', 'description']);
      return FoodService.update(data).$promise
        .then(food => {
          toastr.success(`Updating food ${food.name} compeleted.`);

          // Trigger callback.
          vm.onUpdate({ food: food });
        });
    }

    /**
     * @name getEmptyFoodModel
     * @description 
     * Get empty food model for create new.
     */
    function getEmptyFoodModel() {
      return {
        name: '',
        description: ''
      };
    }
  }
})();