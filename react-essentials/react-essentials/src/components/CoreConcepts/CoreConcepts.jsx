import './CoreConcepts.css';
import { CORE_CONCEPTS } from '../../data';
import CoreConcept from '../CoreConcept/CoreConcept';

export default function CoreConcepts(){
  return (
    <section class="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map(coreConcept => <CoreConcept {...coreConcept} />)}
      </ul>
    </section>
  );
}