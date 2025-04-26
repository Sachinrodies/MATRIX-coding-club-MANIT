import { Contest } from '../types/contest';

export const fetchContests = async (): Promise<Contest[]> => {
  try {
    const response = await fetch('/api/contests');
    if (!response.ok) {
      throw new Error('Failed to fetch contests');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching contests:', error);
    throw error;
  }
};

export const createContest = async (contest: Omit<Contest, 'id'>): Promise<Contest> => {
  try {
    const response = await fetch('/api/contests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contest),
    });
    if (!response.ok) {
      throw new Error('Failed to create contest');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating contest:', error);
    throw error;
  }
};

export const updateContest = async (id: string, contest: Partial<Contest>): Promise<Contest> => {
  try {
    const response = await fetch(`/api/contests/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contest),
    });
    if (!response.ok) {
      throw new Error('Failed to update contest');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating contest:', error);
    throw error;
  }
};

export const deleteContest = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`/api/contests/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete contest');
    }
  } catch (error) {
    console.error('Error deleting contest:', error);
    throw error;
  }
}; 