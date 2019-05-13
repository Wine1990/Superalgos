
function newStrategyPartConstructor () {
  const MODULE_NAME = 'Strategy Part Constructor'
  const ERROR_LOG = true
  const logger = newWebDebugLog()
  logger.fileName = MODULE_NAME

  let thisObject = {

    createStrategyPart: createStrategyPart,
    destroyStrategyPart: destroyStrategyPart,
    initialize: initialize,
    finalize: finalize

  }

  let floatingLayer

  return thisObject

  function finalize () {
    floatingLayer = undefined

    payload.uiObject.finalize()
    payload.uiObject = undefined
  }

  function initialize (pFloatingLayer) {
    floatingLayer = pFloatingLayer
  }

  function createStrategyPart (payload) {
    let floatingObject = newFloatingObject()
    floatingObject.fitFunction = canvas.floatingSpace.fitIntoVisibleArea
    floatingObject.container.connectToParent(canvas.floatingSpace.container, false, false, false, false, false, false, false, false)
    floatingObject.initialize('Strategy Part', payload)
    payload.floatingObject = floatingObject

    let strategyPart = newStrategyPart()
    strategyPart.fitFunction = canvas.floatingSpace.fitIntoVisibleArea
    strategyPart.isVisibleFunction = canvas.floatingSpace.isThisPointVisible
    let menuItemsInitialValues = getMenuItemsInitialValues(strategyPart, payload)
    strategyPart.initialize(payload, menuItemsInitialValues)
    strategyPart.container.connectToParent(floatingObject.container, false, false, true, true, false, false, true, true, true)
    payload.uiObject = strategyPart

    setFloatingObjectBasicProperties(floatingObject, payload)

    floatingLayer.addFloatingObject(floatingObject)

    return
  }

  function getMenuItemsInitialValues (strategyPart, payload) {
    let menuItemsInitialValues = []
    switch (payload.node.type) {
      case 'Trading System': {
        strategyPart.imagePath = 'Images/icons/style-01/analysis.png'
        menuItemsInitialValues = [
          {
            action: 'Reload Trading System',
            actionFunction: payload.onMenuItemClick,
            label: 'Reload',
            visible: false,
            imagePathOn: 'Images/icons/style-01/vector.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -60
          },
          {
            action: 'Save Trading System',
            actionFunction: payload.onMenuItemClick,
            label: 'Save Changes',
            workingLabel: 'Saving...',
            workDoneLabel: 'Saved',
            workFailedLabel: 'Not Saved',
            visible: false,
            imagePathOn: 'Images/icons/style-01/upload.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          },
          {
            action: 'New Strategy',
            actionFunction: payload.onMenuItemClick,
            label: 'New Strategy',
            visible: false,
            imagePathOn: 'Images/icons/style-01/quality.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          },
          {
            action: 'Open Settings',
            actionFunction: payload.onMenuItemClick,
            label: 'Settings',
            visible: false,
            imagePathOn: 'Images/icons/style-01/tools.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 60
          }]
        break
      }
      case 'Strategy': {
        strategyPart.imagePath = 'Images/icons/style-01/quality.png'
        menuItemsInitialValues = [
          {
            action: 'Delete Strategy',
            actionFunction: payload.onMenuItemClick,
            label: 'Delete This Strategy',
            visible: false,
            imagePathOn: 'Images/icons/style-01/trash.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          },
          {
            action: 'Open Settings',
            actionFunction: payload.onMenuItemClick,
            label: 'Settings',
            visible: false,
            imagePathOn: 'Images/icons/style-01/tools.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          }]
        break
      }
      case 'Strategy Entry Event': {
        strategyPart.imagePath = 'Images/icons/style-01/startup.png'
        menuItemsInitialValues = [
          {
            action: 'Add Situation',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Situation',
            visible: false,
            imagePathOn: 'Images/icons/style-01/attractive.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 0
          }]
        break
      }
      case 'Strategy Exit Event': {
        strategyPart.imagePath = 'Images/icons/style-01/support.png'
        menuItemsInitialValues = [
          {
            action: 'Add Situation',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Situation',
            visible: false,
            imagePathOn: 'Images/icons/style-01/attractive.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 0
          }]
        break
      }
      case 'Trade Entry Event': {
        strategyPart.imagePath = 'Images/icons/style-01/compass.png'
        menuItemsInitialValues = [
          {
            action: 'Add Situation',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Situation',
            visible: false,
            imagePathOn: 'Images/icons/style-01/attractive.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 0
          }]
        break
      }
      case 'Stop': {
        strategyPart.imagePath = 'Images/icons/style-01/pixel.png'
        menuItemsInitialValues = [
          {
            action: 'Add Phase',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Phase',
            visible: false,
            imagePathOn: 'Images/icons/style-01/placeholder.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 0
          }]
        break
      }
      case 'Take Profit': {
        strategyPart.imagePath = 'Images/icons/style-01/competition.png'
        menuItemsInitialValues = [
          {
            action: 'Add Phase',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Phase',
            visible: false,
            imagePathOn: 'Images/icons/style-01/placeholder.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 0
          }]
        break
      }
      case 'Phase': {
        strategyPart.imagePath = 'Images/icons/style-01/placeholder.png'
        strategyPart.codeEditor = newCodeEditor()
        strategyPart.codeEditor.isVisibleFunction = strategyPart.isVisibleFunction
        strategyPart.codeEditor.initialize()
        strategyPart.codeEditor.container.connectToParent(strategyPart.container, false, false, true, true, false, false, false, false)

        menuItemsInitialValues = [
          {
            action: 'Edit Code',
            actionFunction: strategyPart.codeEditor.activate,
            label: 'Edit Code',
            visible: false,
            imagePathOn: 'Images/icons/style-01/html.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 40
          },
          {
            action: 'Add Situation',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Situation',
            visible: false,
            imagePathOn: 'Images/icons/style-01/attractive.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 0
          },
          {
            action: 'Delete Phase',
            actionFunction: payload.onMenuItemClick,
            label: 'Delete This Phase',
            visible: false,
            imagePathOn: 'Images/icons/style-01/trash.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -40
          }]
        break
      }
      case 'Situation': {
        strategyPart.imagePath = 'Images/icons/style-01/attractive.png'
        menuItemsInitialValues = [
          {
            action: 'Add Condition',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Condition',
            visible: false,
            imagePathOn: 'Images/icons/style-01/testing.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          },
          {
            action: 'Delete Situation',
            actionFunction: payload.onMenuItemClick,
            label: 'Delete This Situation',
            visible: false,
            imagePathOn: 'Images/icons/style-01/trash.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          }]
        break
      }
      case 'Condition': {
        strategyPart.imagePath = 'Images/icons/style-01/testing.png'
        strategyPart.codeEditor = newCodeEditor()
        strategyPart.codeEditor.isVisibleFunction = strategyPart.isVisibleFunction
        strategyPart.codeEditor.initialize()
        strategyPart.codeEditor.container.connectToParent(strategyPart.container, false, false, true, true, false, false, false, false)

        menuItemsInitialValues = [
          {
            action: 'Edit Code',
            actionFunction: strategyPart.codeEditor.activate,
            label: 'Edit Code',
            visible: false,
            imagePathOn: 'Images/icons/style-01/html.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          },
          {
            action: 'Delete Condition',
            actionFunction: payload.onMenuItemClick,
            label: 'Delete This Condition',
            visible: false,
            imagePathOn: 'Images/icons/style-01/trash.png',
            imagePathOff: 'Images/icons/style-01/target.png',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          }]
        break
      }
      default: {
        if (ERROR_LOG === true) { logger.write('[ERROR] getMenuItemsInitialValues -> Part Type not Recognized -> type = ' + payload.node.type) }
      }
    }

    return menuItemsInitialValues
  }

  function setFloatingObjectBasicProperties (floatingObject, payload) {
    const FRICTION = 0.97

    switch (payload.node.type) {
      case 'Trading System': {
        level_0()
        break
      }
      case 'Strategy': {
        level_1()
        break
      }
      case 'Strategy Entry Event': {
        level_2()
        break
      }
      case 'Strategy Exit Event': {
        level_2()
        break
      }
      case 'Trade Entry Event': {
        level_2()
        break
      }
      case 'Trade Exit Event': {
        level_2()
        break
      }
      case 'Stop': {
        level_2()
        break
      }
      case 'Take Profit': {
        level_2()
        break
      }
      case 'Phase': {
        level_3()
        break
      }
      case 'Situation': {
        level_4()
        break
      }
      case 'Condition': {
        level_5()
        break
      }
      default: {
        if (ERROR_LOG === true) { logger.write('[ERROR] initialize -> Part Type not Recognized -> type = ' + payload.node.type) }
        return
      }
    }

    function level_0 () {
      floatingObject.friction = 0.93

      floatingObject.initializeMass(500)
      floatingObject.initializeRadius(45)
      floatingObject.initializeImageSize(80)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.WHITE + ', 1)'
    }

    function level_1 () {
      floatingObject.friction = 0.94

      floatingObject.initializeMass(250)
      floatingObject.initializeRadius(45)
      floatingObject.initializeImageSize(80)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.WHITE + ', 1)'
    }

    function level_2 () {
      floatingObject.friction = FRICTION

      floatingObject.initializeMass(50)
      floatingObject.initializeRadius(40)
      floatingObject.initializeImageSize(70)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.GREEN + ', 1)'
    }

    function level_3 () {
      floatingObject.friction = FRICTION

      floatingObject.initializeMass(10)
      floatingObject.initializeRadius(35)
      floatingObject.initializeImageSize(60)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.RUSTED_RED + ', 1)'
    }

    function level_4 () {
      floatingObject.friction = FRICTION

      floatingObject.initializeMass(10)
      floatingObject.initializeRadius(30)
      floatingObject.initializeImageSize(50)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.TITANIUM_YELLOW + ', 1)'
    }

    function level_5 () {
      floatingObject.friction = FRICTION

      floatingObject.initializeMass(10)
      floatingObject.initializeRadius(25)
      floatingObject.initializeImageSize(30)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.RED + ', 1)'
    }

    floatingObject.labelStrokeStyle = 'rgba(' + UI_COLOR.WHITE + ', 1)'
  }

  function destroyStrategyPart (payload) {
    floatingLayer.removeFloatingObject(payload.floatingObject.handle)

    payload.floatingObject.finalize()
    payload.floatingObject = undefined

    payload.uiObject.finalize()
    payload.uiObject = undefined
  }
}
