import MainListView from 'views/MainListView';
import RootTemplate from 'components/templates/RootTemplate';
import { ContactsDataProvider } from 'providers/useContactsData';

function Root() {
  return (
    <ContactsDataProvider>
      <RootTemplate>
        <MainListView />
      </RootTemplate>
    </ContactsDataProvider>
  );
}

export default Root;
