
import 'reflect-metadata';
import { Container } from 'typedi';
import RESTBloodProcessing from './lib/rest-api/blood-processing';
import RESTContainerManagement from './lib/rest-api/container-management';
import RESTContainerTypes from './lib/rest-api/container-types';
import RESTLabels from './lib/rest-api/labels';
import RESTLabelTypes from './lib/rest-api/label-types';
import RESTPerson from './lib/rest-api/person';
import RESTStorages from './lib/rest-api/storages';
import RESTTubes from './lib/rest-api/tubes';
import RESTSpecimenType from './lib/rest-api/specimens-types';
import AllureReporter from './lib/reporter/allure-reporter';
import RESTReagentTypes from './lib/rest-api/reagent-types';
import RESTSpecimens from './lib/rest-api/specimens';
import RESTSpecimenProcesses from './lib/rest-api/specimen-processes';
import RESTReagent from './lib/rest-api/reagents';
import RESTKitOrders from './lib/rest-api/kit-orders';
import RESTCollectionEvents from './lib/rest-api/collection-events';
import RESTContainerProcesses from './lib/rest-api/container-processes';
import RESTRuns from './lib/rest-api/runs';
import StringGeneratorImport from './lib/utils/string-generator';
import CollectionsImport from './lib/utils/collections';
import { DashboardPage as PODashboardPage } from './lib/ui/page-objects/DashboardPage.po';
import { ShipmentReceiving as POShipmentReceiving } from './lib/ui/page-objects/Accessioning/ShipmentReceiving.po';
import { ReagentLots as POReagentLots } from './lib/ui/page-objects/Reagents/Lots/ReagentLots.po';

/**
 * REST api
 */
export const BloodProcessing = Container.get(RESTBloodProcessing);
export const ContainerManagement = Container.get(RESTContainerManagement);
export const ContainerTypes = Container.get(RESTContainerTypes);
export const Labels = Container.get(RESTLabels);
export const LabelTypes = Container.get(RESTLabelTypes);
export const PersonService = Container.get(RESTPerson);
export const Storages = Container.get(RESTStorages);
export const Tubes = Container.get(RESTTubes);
export const SpecimenTypeService = Container.get(RESTSpecimenType);
export const SpecimenService = Container.get(RESTSpecimens);
export const ReagentTypes = Container.get(RESTReagentTypes);
export const KitOrders = Container.get(RESTKitOrders);
export const Reagents = Container.get(RESTReagent);
export const CollectionEvents = Container.get(RESTCollectionEvents);
export const SpecimenProcesses = Container.get(RESTSpecimenProcesses);
export const ContainerProcess = Container.get(RESTContainerProcesses);
export const Runs = Container.get(RESTRuns);

/**
 * UI Page Objects
 */
export const DashboardPage = Container.get(PODashboardPage);
// accessioning
export const ShipmentReceiving = Container.get(POShipmentReceiving);
// reagents
export const ReagentLots = Container.get(POReagentLots);

/**
 * Utils
 */
export const Collections = Container.get(CollectionsImport);
export const Reporter = Container.get(AllureReporter);
export const StringGenerator = Container.get(StringGeneratorImport);

/**
 * Constants
 */
export const dateFormat: string = 'YYYY-MM-DDTHH:mm:ss:sssZ';
export const uiInputDateFormat: string = 'MM/DD/YYYY';
export const kitOrderMaxPollingAttempts: number = 3;
